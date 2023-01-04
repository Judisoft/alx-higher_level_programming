#!/usr/bin/pythonn3
def safe_print_list(my_list=[], x=0):
    try:
        while x in my_list:
            print(x)
            x += 1
    except RuntimeError:
        print("Program failed!")

