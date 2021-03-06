#!/usr/bin/env python
"""Benchmark TODO."""

import timeit

name = "TODO"
repeats = 3
iterations = 1000000


def print_version():
    """Print the TAP version."""

    print("TAP version 13")


def print_summary(total, passing):
    """Print the benchmark summary.

    # Arguments

    * `total`: total number of tests
    * `passing`: number of passing tests

    """

    print("#")
    print("1.." + str(total))  # TAP plan
    print("# total " + str(total))
    print("# pass  " + str(passing))
    print("#")
    print("# ok")


def print_results(elapsed):
    """Print benchmark results.

    # Arguments

    * `elapsed`: elapsed time (in seconds)

    # Examples

    ``` python
    python> print_results(0.131009101868)
    ```
    """

    rate = iterations / elapsed

    print("  ---")
    print("  iterations: " + str(iterations))
    print("  elapsed: " + str(elapsed))
    print("  rate: " + str(rate))
    print("  ...")


def benchmark():
    """Run the benchmark and print benchmark results."""

    setup = "from math import TODO; from random import random;"
    stmt = "y = TODO(random())"

    t = timeit.Timer(stmt, setup=setup)

    print_version()

    for i in xrange(3):
        print("# python::" + name)
        elapsed = t.timeit(number=iterations)
        print_results(elapsed)
        print("ok " + str(i+1) + " benchmark finished")

    print_summary(repeats, repeats)


def main():
    """Run the benchmark."""
    benchmark()


if __name__ == "__main__":
    main()
