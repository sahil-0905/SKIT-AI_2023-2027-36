import express from "express";
import InterviewSession from "../models/InterviewSession.js";
import User from "../models/User.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a new interview session (interviewer only)
router.post("/", protect, async (req, res) => {
  const { title, problems, candidateEmail, scheduledAt, duration } = req.body;

  try {
    // candidate ka email se User dhoondo
    const candidate = await User.findOne({ email: candidateEmail, role: "student" });

    if (!candidate) {
      return res.status(404).json({ message: "No student found with this email" });
    }

    const newSession = new InterviewSession({
      title,
      problems,
      interviewer: req.user.id,
      candidate: candidate._id,
      scheduledAt,
      duration,
    });

    await newSession.save();
    res.status(201).json({ message: "Interview scheduled successfully", session: newSession });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error scheduling interview" });
  }
});

// Get sessions for the logged-in user (works for both interviewer and student)
router.get("/my-sessions", protect, async (req, res) => {
  try {
    let sessions;

    if (req.user.role === "interviewer") {
      sessions = await InterviewSession.find({ interviewer: req.user.id })
        .populate("candidate", "name email")
        .populate("problems", "title difficulty");
    } else {
      sessions = await InterviewSession.find({ candidate: req.user.id })
        .populate("interviewer", "name email")
        .populate("problems", "title difficulty");
    }

    res.status(200).json(sessions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching sessions" });
  }
});

export default router;