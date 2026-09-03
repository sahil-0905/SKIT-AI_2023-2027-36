def count_lines(code):
    return len(code.splitlines())


def count_functions(code):
    return code.count("def ")