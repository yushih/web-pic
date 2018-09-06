CC=gcc
CFLAGS=-O -D__EMSCRIPTEN__ -g
EMCC_LINK_OPTIONS=-Oz --memory-init-file 0

%.bc: %.c
	emcc -O -DSAFE_MODE -o $@ $<

dpic.js: dpic.wrapped.js dpic.wrapper.js
	sed '/INSERT_WRAPPED/r dpic.wrapped.js' dpic.wrapper.js > dpic.js

dpic.wrapped.js: dpic.bc p2clib.bc
	emcc $(EMCC_LINK_OPTIONS) -s WASM=0 -o $@ $^

dpic: dpic.o p2clib.o
	$(CC) -o dpic $^ -lm

clean_native:
	rm *.o dpic || true

clean_js:
	rm *.bc dpic.js || true

clean: clean_native clean_js
