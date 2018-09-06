CC=gcc
CFLAGS=-O

%.bc: %.c
	emcc -O -DSAFE_MODE -o $@ $<

dpic.js: dpic.bc p2clib.bc
	emcc -Oz -s EXPORTED_FUNCTIONS='["_web_entry"]' -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' -s WASM=0 -o $@ $^

dpic: dpic.o p2clib.o
	$(CC) -o dpic $^ -lm

clean_native:
	rm *.o dpic || true

clean_js:
	rem *.bc dpic.js || true

clean: clean_native clean_js
