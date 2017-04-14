import timeit
import os 

command = 'import os; os.system(\'./eval1\')' 

print min (timeit.repeat(command, repeat=5, number = 1))
