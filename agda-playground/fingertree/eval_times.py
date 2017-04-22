import timeit
import os 
import sys 
command = 'import os; os.system(\'./RandomAccessSequence-final\')' 
n = int (sys.argv[1])
print min (timeit.repeat(command, repeat = n , number = 1))
