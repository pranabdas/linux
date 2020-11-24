### High Performance Computing

#### Basic Libraries/utilities  
```
sudo apt install make 
sudo apt install gcc
sudo apt install gfortran 
```

#### MPI Libraries
```
sudo apt install mpich
```

#### Math Libraries 
**FFTW** 
```
sudo apt install libfftw3-3
```
**LAPACK, BLAS, TMGLIB**  
Resources: [http://www.netlib.org/lapack/](http://www.netlib.org/lapack/){:target="_blank"} 
```
wget https://github.com/Reference-LAPACK/lapack/archive/v3.9.0.tar.gz 
tar -xzvf v3.9.0.tar.gz
cd lapack-3.9.0
cp make.inc.example make.inc
make blaslib
make lapacklib
make tmglib
sudo cp librefblas.a /usr/local/lib/libblas.a
sudo cp liblapack.a /usr/local/lib/liblapack.a
sudo cp libtmglib.a /usr/local/lib/libtmg.a
```
