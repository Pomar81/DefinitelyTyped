declare module "tty" {
    import * as net from "net";

    function isatty(fd: number): boolean;
    class ReadStream extends net.Socket {
        isRaw: boolean;
        setRawMode(mode: boolean): void;
        isTTY: boolean;
    }
    /**
     * -1 - to the left from cursor
     *  0 - the entire line
     *  1 - to the right from cursor
     */
    type Direction = -1 | 0 | 1;
    class WriteStream extends net.Socket {
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: "resize", listener: () => void): this;

        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: "resize"): boolean;

        on(event: string, listener: (...args: any[]) => void): this;
        on(event: "resize", listener: () => void): this;

        once(event: string, listener: (...args: any[]) => void): this;
        once(event: "resize", listener: () => void): this;

        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: "resize", listener: () => void): this;

        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: "resize", listener: () => void): this;

        clearLine(dir: Direction): void;
        clearScreenDown(): void;
        cursorTo(x: number, y: number): void;
        /**
         * @default `process.env`
         */
        getColorDepth(env?: {}): number;
        getWindowSize(): [number, number];
        columns: number;
        rows: number;
        isTTY: boolean;
    }
}
