import dns from "dns";

dns.resolveSrv(
  "_mongodb._tcp.cluster0.estpqmw.mongodb.net",
  (err, records) => {
    console.log("ERR:", err);
    console.log("RECORDS:", records);
  }
);