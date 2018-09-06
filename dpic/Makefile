CC=gcc
CFLAGS=-O

dpic: dpic.o p2clib.o
	$(CC) -o dpic $^ -lm

clean:
	rm *.o dpic || true
