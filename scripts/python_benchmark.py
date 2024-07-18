import numpy as np
import time

# Create two large random matrices
a = np.random.randn(10000, 10000)
b = np.random.randn(10000, 10000)

t1 = time.time()
# That's the expensive call:
result = np.linalg.solve(a, b)
print(time.time() - t1)
