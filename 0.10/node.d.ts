// Type definitions for Node.js v0.10.1
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <http://typescriptlang.org>, DefinitelyTyped <https://github.com/DefinitelyTyped/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/************************************************
*                                               *
*               Node.js v0.10.1 API             *
*                                               *
************************************************/

/************************************************
*                                               *
*                   GLOBAL                      *
*                                               *
************************************************/
declare var process: NodeJS.Process;
declare var global: any;

declare var __filename: string;
declare var __dirname: string;

declare function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timer;
declare function clearTimeout(timeoutId: NodeJS.Timer): void;
declare function setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timer;
declare function clearInterval(intervalId: NodeJS.Timer): void;
declare function setImmediate(callback: (...args: any[]) => void, ...args: any[]): any;
declare function clearImmediate(immediateId: any): void;

interface NodeRequireFunction {
  (id: string): any;
}

interface NodeRequire extends NodeRequireFunction {
  resolve(id: string): string;
  cache: { [filename: string]: NodeModule };
  extensions: NodeExtensions;
  main: any;
}

interface NodeExtensions {
  '.js': (m: NodeModule, filename: string) => any;
  '.json': (m: NodeModule, filename: string) => any;
  '.node': (m: NodeModule, filename: string) => any;
  [ext: string]: (m: NodeModule, filename: string) => any;
}

declare var require: NodeRequire;

declare class NodeModule {
  static runMain(): void;
  static wrap(code: string): string;
  static _nodeModulePaths(path: string): string[];
  static _load(request: string, parent?: NodeModule, isMain?: boolean): any;
  static _resolveFilename(request: string, parent?: NodeModule, isMain?: boolean): string;
  static _extensions: NodeExtensions;

  constructor(filename: string);
  _compile(code: string, filename: string): string;

  id: string;
  parent: NodeModule;
  filename: string;
  paths: string[];
  children: NodeModule[];
  exports: any;
  loaded: boolean;
  require: NodeRequireFunction;
}

declare var module: NodeModule;

// Same as module.exports
declare var exports: any;

declare var SlowBuffer: {
  new (str: string, encoding?: string): Buffer;
  new (size: number): Buffer;
  new (size: Uint8Array): Buffer;
  new (array: any[]): Buffer;
  prototype: Buffer;
  isBuffer(obj: any): boolean;
  byteLength(string: string, encoding?: string): number;
  concat(list: Buffer[], totalLength?: number): Buffer;
};

// Console class (compatible with TypeScript `lib.d.ts`).
declare interface Console {
  log(msg: any, ...params: any[]): void;
  info(msg: any, ...params: any[]): void;
  warn(msg: any, ...params: any[]): void;
  error(msg: any, ...params: any[]): void;
  dir(value: any, ...params: any[]): void;
  time(timerName?: string): void;
  timeEnd(timerName?: string): void;
  trace(msg: any, ...params: any[]): void;
  assert(test?: boolean, msg?: string, ...params: any[]): void;

  Console: new (stdout: NodeJS.WritableStream) => Console;
}

declare var console: Console;

declare class Buffer {
  [index: number]: number;
  constructor(str: string, encoding?: string);
  constructor(size: number);
  constructor(size: Uint8Array);
  constructor(array: any[]);
  static isBuffer(obj: any): boolean;
  static byteLength(string: string, encoding?: string): number;
  static concat(list: Buffer[], totalLength?: number): Buffer;
  write(string: string, offset?: number, length?: number, encoding?: string): number;
  toString(encoding?: string, start?: number, end?: number): string;
  toJSON(): any;
  length: number;
  copy(targetBuffer: Buffer, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;
  slice(start?: number, end?: number): Buffer;
  readUInt8(offset: number, noAssert?: boolean): number;
  readUInt16LE(offset: number, noAssert?: boolean): number;
  readUInt16BE(offset: number, noAssert?: boolean): number;
  readUInt32LE(offset: number, noAssert?: boolean): number;
  readUInt32BE(offset: number, noAssert?: boolean): number;
  readInt8(offset: number, noAssert?: boolean): number;
  readInt16LE(offset: number, noAssert?: boolean): number;
  readInt16BE(offset: number, noAssert?: boolean): number;
  readInt32LE(offset: number, noAssert?: boolean): number;
  readInt32BE(offset: number, noAssert?: boolean): number;
  readFloatLE(offset: number, noAssert?: boolean): number;
  readFloatBE(offset: number, noAssert?: boolean): number;
  readDoubleLE(offset: number, noAssert?: boolean): number;
  readDoubleBE(offset: number, noAssert?: boolean): number;
  writeUInt8(value: number, offset: number, noAssert?: boolean): void;
  writeUInt16LE(value: number, offset: number, noAssert?: boolean): void;
  writeUInt16BE(value: number, offset: number, noAssert?: boolean): void;
  writeUInt32LE(value: number, offset: number, noAssert?: boolean): void;
  writeUInt32BE(value: number, offset: number, noAssert?: boolean): void;
  writeInt8(value: number, offset: number, noAssert?: boolean): void;
  writeInt16LE(value: number, offset: number, noAssert?: boolean): void;
  writeInt16BE(value: number, offset: number, noAssert?: boolean): void;
  writeInt32LE(value: number, offset: number, noAssert?: boolean): void;
  writeInt32BE(value: number, offset: number, noAssert?: boolean): void;
  writeFloatLE(value: number, offset: number, noAssert?: boolean): void;
  writeFloatBE(value: number, offset: number, noAssert?: boolean): void;
  writeDoubleLE(value: number, offset: number, noAssert?: boolean): void;
  writeDoubleBE(value: number, offset: number, noAssert?: boolean): void;
  fill(value: any, offset?: number, end?: number): void;
}

/************************************************
*                                               *
*               GLOBAL INTERFACES               *
*                                               *
************************************************/
declare namespace NodeJS {
  export interface ErrnoException extends Error {
    errno?: number;
    code?: string;
    path?: string;
    syscall?: string;
    stack?: string;
  }

  export interface EventEmitter {
    addListener(event: string, listener: Function): this;
    on(event: string, listener: Function): this;
    once(event: string, listener: Function): this;
    removeListener(event: string, listener: Function): this;
    removeAllListeners(event?: string): this;
    setMaxListeners(n: number): void;
    listeners(event: string): Function[];
    emit(event: string, ...args: any[]): boolean;
  }

  export interface ReadableStream extends EventEmitter {
    readable: boolean;
    read(size?: number): any;
    setEncoding(encoding: string): void;
    pause(): void;
    resume(): void;
    pipe<T extends WritableStream>(destination: T, options?: { end?: boolean; }): T;
    unpipe<T extends WritableStream>(destination?: T): void;
    unshift(chunk: string): void;
    unshift(chunk: Buffer): void;
    wrap(oldStream: ReadableStream): ReadableStream;
  }

  export interface WritableStream extends EventEmitter {
    writable: boolean;
    write(buffer: Buffer, cb?: Function): boolean;
    write(str: string, cb?: Function): boolean;
    write(str: string, encoding?: string, cb?: Function): boolean;
    end(): void;
    end(buffer: Buffer, cb?: Function): void;
    end(str: string, cb?: Function): void;
    end(str: string, encoding?: string, cb?: Function): void;
  }

  export interface ReadWriteStream extends ReadableStream, WritableStream { }

  export interface Env {
    PATH: string;
    [key: string]: string;
  }

  export interface Process extends EventEmitter {
    stdout: WritableStream;
    stderr: WritableStream;
    stdin: ReadableStream;
    argv: string[];
    /**
     * The process.execArgv property returns the set of Node.js-specific command-line options passed when the Node.js process was launched. These options do not appear in the array returned by the process.argv property, and do not include the Node.js executable, the name of the script, or any options following the script name. These options are useful in order to spawn child processes with the same execution environment as the parent.
     */
    execArgv: string[];
    execPath: string;
    abort(): void;
    chdir(directory: string): void;
    cwd(): string;
    env: Env;
    exit(code?: number): void;
    getgid(): number;
    setgid(id: number): void;
    setgid(id: string): void;
    getuid(): number;
    setuid(id: number): void;
    setuid(id: string): void;
    version: string;
    versions: {
      http_parser: string;
      node: string;
      v8: string;
      ares: string;
      uv: string;
      zlib: string;
      openssl: string;
    };
    config: {
      target_defaults: {
        cflags: any[];
        default_configuration: string;
        defines: string[];
        include_dirs: string[];
        libraries: string[];
      };
      variables: {
        clang: number;
        host_arch: string;
        node_install_npm: boolean;
        node_install_waf: boolean;
        node_prefix: string;
        node_shared_openssl: boolean;
        node_shared_v8: boolean;
        node_shared_zlib: boolean;
        node_use_dtrace: boolean;
        node_use_etw: boolean;
        node_use_openssl: boolean;
        target_arch: string;
        v8_no_strict_aliasing: number;
        v8_use_snapshot: boolean;
        visibility: string;
      };
    };
    kill(pid: number, signal?: string | number): void;
    pid: number;
    title: string;
    arch: string;
    platform: string;
    memoryUsage(): { rss: number; heapTotal: number; heapUsed: number; };
    nextTick(callback: Function): void;
    umask(mask?: number): number;
    uptime(): number;
    hrtime(time?: number[]): number[];

    // Worker
    send?(message: any, sendHandle?: any): void;
  }

  export interface Timer {
    ref(): void;
    unref(): void;
  }
}

/************************************************
*                                               *
*                   MODULES                     *
*                                               *
************************************************/
declare module "buffer" {
  export var INSPECT_MAX_BYTES: number;

  export type Encoding = "ascii" | "latin1" | "binary" | "utf8" | "utf-8" | "ucs2" | "ucs-2" | "utf16le" | "utf-16le" | "hex" | "base64";

  var BuffType: typeof Buffer;
  var SlowBuffType: typeof SlowBuffer;

  export { BuffType as Buffer, SlowBuffType as SlowBuffer };
}

declare module "querystring" {
  export function stringify(obj: any, sep?: string, eq?: string): string;
  export function parse(str: string, sep?: string, eq?: string, options?: { maxKeys?: number; }): { [key: string]: string | string[] };
  export function escape(str: string): string;
  export function unescape(str: string): string;
}

declare module "events" {
  export class EventEmitter implements NodeJS.EventEmitter {
    static listenerCount(emitter: EventEmitter, event: string): number;

    addListener(event: string, listener: (...args: any[]) => void): this;
    on(event: string, listener: (...args: any[]) => void): this;
    once(event: string, listener: (...args: any[]) => void): this;
    removeListener(event: string, listener: (...args: any[]) => void): this;
    removeAllListeners(event?: string): this;
    setMaxListeners(n: number): void;
    listeners(event: string): Array<(...args: any[]) => void>;
    emit(event: string, ...args: any[]): boolean;
  }

  export interface Listener<E extends string, L extends Function> {
    on(event: E, listener: L): this;
    once(event: E, listener: L): this;
    addListener(event: E, listener: L): this;
    removeListener(event: E, listener: L): this;
    listeners(event: E): L[];
  }
}

declare module "http" {
  import events = require("events");
  import net = require("net");
  import stream = require("stream");

  export interface OutgoingHeaders {
    [header: string]: number | string | string[];
  }

  export interface IncomingHeaders {
    [header: string]: string | string[];
  }

  export interface Server extends events.EventEmitter {
    listen(port: number, hostname?: string, backlog?: number, callback?: Function): Server;
    listen(path: string, callback?: Function): Server;
    listen(handle: any, listeningListener?: Function): Server;
    close(cb?: any): Server;
    address(): { port: number; family: string; address: string; };
    maxHeadersCount: number;
  }

  export interface IncomingMessage extends events.EventEmitter, stream.Readable {
    httpVersion: string;
    headers: IncomingHeaders;
    rawHeaders: string[];
    trailers: IncomingHeaders;
    rawTrailers: string[];
    setTimeout(msecs: number, callback: Function): NodeJS.Timer;
    /**
     * Only valid for request obtained from http.Server.
     */
    method?: string;
    /**
     * Only valid for request obtained from http.Server.
     */
    url?: string;
    /**
     * Only valid for response obtained from http.ClientRequest.
     */
    statusCode?: number;
    /**
     * Only valid for response obtained from http.ClientRequest.
     */
    statusMessage?: string;
    socket: net.Socket;
  }

  export interface ServerResponse extends events.EventEmitter, stream.Writable {
    // Extended base methods
    write(buffer: Buffer): boolean;
    write(buffer: Buffer, cb?: Function): boolean;
    write(str: string, cb?: Function): boolean;
    write(str: string, encoding?: string, cb?: Function): boolean;
    write(str: string, encoding?: string, fd?: string): boolean;

    writeContinue(): void;
    writeHead(statusCode: number, statusText?: string, headers?: OutgoingHeaders): void;
    writeHead(statusCode: number, headers?: OutgoingHeaders): void;
    statusCode: number;
    setHeader(name: string, value: string): void;
    sendDate: boolean;
    getHeader(name: string): string;
    removeHeader(name: string): void;
    write(chunk: any, encoding?: string): any;
    addTrailers(headers: OutgoingHeaders): void;

    // Extended base methods
    end(): void;
    end(buffer: Buffer, cb?: Function): void;
    end(str: string, cb?: Function): void;
    end(str: string, encoding?: string, cb?: Function): void;
  }

	/**
	 * Object returned by http.request()
	 */
  export interface ClientRequest extends events.EventEmitter, stream.Writable {
    abort(): void;
    setTimeout(timeout: number, callback?: Function): void;
    setNoDelay(noDelay?: boolean): void;
    setSocketKeepAlive(enable?: boolean, initialDelay?: number): void;
  }

  export interface AgentOptions {
		/**
		 * Keep sockets around in a pool to be used by other requests in the future. Default = false
		 */
    keepAlive?: boolean;
		/**
		 * When using HTTP KeepAlive, how often to send TCP KeepAlive packets over sockets being kept alive. Default = 1000.
		 * Only relevant if keepAlive is set to true.
		 */
    keepAliveMsecs?: number;
		/**
		 * Maximum number of sockets to allow per host. Default for Node 0.10 is 5, default for Node 0.12 is Infinity
		 */
    maxSockets?: number;
		/**
		 * Maximum number of sockets to leave open in a free state. Only relevant if keepAlive is set to true. Default = 256.
		 */
    maxFreeSockets?: number;
  }

  export class Agent {
    maxSockets: number;
    sockets: any;
    requests: any;

    constructor(opts?: AgentOptions);

		/**
		 * Destroy any sockets that are currently in use by the agent.
		 * It is usually not necessary to do this. However, if you are using an agent with KeepAlive enabled,
		 * then it is best to explicitly shut down the agent when you know that it will no longer be used. Otherwise,
		 * sockets may hang open for quite a long time before the server terminates them.
		 */
    destroy(): void;
  }

	/**
	 * Options for http.request()
	 */
  export interface RequestOptions {
		/**
		 * A domain name or IP address of the server to issue the request to. Defaults to 'localhost'.
		 */
    host?: string;
		/**
		 * To support url.parse() hostname is preferred over host
		 */
    hostname?: string;
		/**
		 * Port of remote server. Defaults to 80.
		 */
    port?: number | string;
		/**
		 * Local interface to bind for network connections.
		 */
    localAddress?: string;
		/**
		 * Unix Domain Socket (use one of host:port or socketPath)
		 */
    socketPath?: string;
		/**
		 * A string specifying the HTTP request method. Defaults to 'GET'.
		 */
    method?: string;
		/**
		 * Request path. Defaults to '/'. Should include query string if any. E.G. '/index.html?page=12'
		 */
    path?: string;
		/**
		 * An object containing request headers.
		 */
    headers?: OutgoingHeaders;
		/**
		 * Basic authentication i.e. 'user:password' to compute an Authorization header.
		 */
    auth?: string;
		/**
		 * Controls Agent behavior. When an Agent is used request will default to Connection: keep-alive. Possible values:
		 * - undefined (default): use global Agent for this host and port.
		 * - Agent object: explicitly use the passed in Agent.
		 * - false: opts out of connection pooling with an Agent, defaults request to Connection: close.
		 */
    agent?: Agent | boolean;
  }

  export var STATUS_CODES: {
    [errorCode: number]: string;
    [errorCode: string]: string;
  };
  export function createServer(requestListener?: (request: IncomingMessage, response: ServerResponse) => void): Server;
  export function createClient(port?: number, host?: string): any;
  export function request(options: string | RequestOptions, callback?: (response: IncomingMessage) => void): ClientRequest;
  export function get(options: string | RequestOptions, callback?: (response: IncomingMessage) => void): ClientRequest;
  export var globalAgent: Agent;
}
declare module "cluster" {
  import child = require("child_process");
  import events = require("events");

  export interface ClusterSettings {
    exec?: string;
    args?: string[];
    silent?: boolean;
  }

  export class Worker extends events.EventEmitter {
    id: string;
    process: child.ChildProcess;
    suicide: boolean;
    send(message: any, sendHandle?: any): void;
    kill(signal?: string): void;
    destroy(signal?: string): void;
    disconnect(): void;
  }

  export var settings: ClusterSettings;
  export var isMaster: boolean;
  export var isWorker: boolean;
  export function setupMaster(settings?: ClusterSettings): void;
  export function fork(env?: any): Worker;
  export function disconnect(callback?: Function): void;
  export var worker: Worker;
  export var workers: Worker[];

  // Event emitter
  export function addListener(event: string, listener: Function): void;
  export function on(event: string, listener: Function): any;
  export function once(event: string, listener: Function): void;
  export function removeListener(event: string, listener: Function): void;
  export function removeAllListeners(event?: string): void;
  export function setMaxListeners(n: number): void;
  export function listeners(event: string): Function[];
  export function emit(event: string, ...args: any[]): boolean;
}

declare module "zlib" {
  import stream = require("stream");
  export interface ZlibOptions { chunkSize?: number; windowBits?: number; level?: number; memLevel?: number; strategy?: number; dictionary?: any; }
  export interface ZlibCallback { (error: Error, result: any): void }

  export interface Gzip extends stream.Transform { }
  export interface Gunzip extends stream.Transform { }
  export interface Deflate extends stream.Transform { }
  export interface Inflate extends stream.Transform { }
  export interface DeflateRaw extends stream.Transform { }
  export interface InflateRaw extends stream.Transform { }
  export interface Unzip extends stream.Transform { }

  export function createGzip(options?: ZlibOptions): Gzip;
  export function createGunzip(options?: ZlibOptions): Gunzip;
  export function createDeflate(options?: ZlibOptions): Deflate;
  export function createInflate(options?: ZlibOptions): Inflate;
  export function createDeflateRaw(options?: ZlibOptions): DeflateRaw;
  export function createInflateRaw(options?: ZlibOptions): InflateRaw;
  export function createUnzip(options?: ZlibOptions): Unzip;

  export function deflate(buf: Buffer | string, callback: ZlibCallback): void;
  export function deflateRaw(buf: Buffer | string, callback: ZlibCallback): void;
  export function gzip(buf: Buffer | string, callback: ZlibCallback): void;
  export function gunzip(buf: Buffer | string, callback: ZlibCallback): void;
  export function inflate(buf: Buffer | string, callback: ZlibCallback): void;
  export function inflateRaw(buf: Buffer | string, callback: ZlibCallback): void;
  export function unzip(buf: Buffer | string, callback: ZlibCallback): void;

  // Constants
  export var Z_NO_FLUSH: number;
  export var Z_PARTIAL_FLUSH: number;
  export var Z_SYNC_FLUSH: number;
  export var Z_FULL_FLUSH: number;
  export var Z_FINISH: number;
  export var Z_BLOCK: number;
  export var Z_TREES: number;
  export var Z_OK: number;
  export var Z_STREAM_END: number;
  export var Z_NEED_DICT: number;
  export var Z_ERRNO: number;
  export var Z_STREAM_ERROR: number;
  export var Z_DATA_ERROR: number;
  export var Z_MEM_ERROR: number;
  export var Z_BUF_ERROR: number;
  export var Z_VERSION_ERROR: number;
  export var Z_NO_COMPRESSION: number;
  export var Z_BEST_SPEED: number;
  export var Z_BEST_COMPRESSION: number;
  export var Z_DEFAULT_COMPRESSION: number;
  export var Z_FILTERED: number;
  export var Z_HUFFMAN_ONLY: number;
  export var Z_RLE: number;
  export var Z_FIXED: number;
  export var Z_DEFAULT_STRATEGY: number;
  export var Z_BINARY: number;
  export var Z_TEXT: number;
  export var Z_ASCII: number;
  export var Z_UNKNOWN: number;
  export var Z_DEFLATED: number;
  export var Z_NULL: number;
}

declare module "os" {
  export function tmpdir(): string;
  export function hostname(): string;
  export function type(): string;
  export function platform(): string;
  export function arch(): string;
  export function release(): string;
  export function uptime(): number;
  export function loadavg(): number[];
  export function totalmem(): number;
  export function freemem(): number;
  export function cpus(): { model: string; speed: number; times: { user: number; nice: number; sys: number; idle: number; irq: number; }; }[];
  export function networkInterfaces(): any;
  export var EOL: string;
}

declare module "https" {
  import tls = require("tls");
  import events = require("events");
  import http = require("http");

  export interface ServerOptions {
    pfx?: any;
    key?: any;
    passphrase?: string;
    cert?: any;
    ca?: any;
    crl?: any;
    ciphers?: string;
    honorCipherOrder?: boolean;
    requestCert?: boolean;
    rejectUnauthorized?: boolean;
    NPNProtocols?: any;
    SNICallback?: (servername: string) => any;
  }

  export interface RequestOptions extends http.RequestOptions {
    pfx?: string | Buffer;
    key?: string | Buffer;
    passphrase?: string;
    cert?: string | Buffer;
    ca?: string | Buffer | string[] | Buffer[];
    ciphers?: string;
    rejectUnauthorized?: boolean;
  }

  export interface AgentOptions extends http.AgentOptions {
    maxCachedSessions?: number;
  }

  export class Agent extends http.Agent {
    constructor (options?: AgentOptions);
  }

  export interface Server extends tls.Server { }
  export function createServer(options: ServerOptions, requestListener?: Function): Server;
  export function request(options: string | RequestOptions, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
  export function get(options: string | RequestOptions, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
  export var globalAgent: Agent;
}

declare module "punycode" {
  export function decode(string: string): string;
  export function encode(string: string): string;
  export function toUnicode(domain: string): string;
  export function toASCII(domain: string): string;
  export var ucs2: ucs2;
  interface ucs2 {
    decode(string: string): string;
    encode(codePoints: number[]): string;
  }
  export var version: any;
}

declare module "repl" {
  import { EventEmitter } from "events";
  import { Interface } from "readline";

  export interface ReplOptions {
    prompt?: string;
    input?: NodeJS.ReadableStream;
    output?: NodeJS.WritableStream;
    terminal?: boolean;
    eval?: Function;
    useColors?: boolean;
    useGlobal?: boolean;
    ignoreUndefined?: boolean;
    writer?: Function;
  }

  export function start(options: ReplOptions): REPLServer;

  export type REPLCommand = (this: REPLServer, rest: string) => void;

  export class REPLServer extends Interface {
    inputStream: NodeJS.ReadableStream;
    outputStream: NodeJS.WritableStream;
    useColors: boolean;
    commands: {
      [command: string]: REPLCommand;
    };
    defineCommand(keyword: string, cmd: REPLCommand | { help: string, action: REPLCommand }): void;
    displayPrompt(preserveCursor?: boolean): void;
    setPrompt(prompt: string): void;
  }
}

declare module "readline" {
  import events = require("events");

  export interface Key {
    sequence?: string;
    name?: string;
    ctrl?: boolean;
    meta?: boolean;
    shift?: boolean;
  }

  export class Interface extends events.EventEmitter {
    setPrompt(prompt: string): void;
    prompt(preserveCursor?: boolean): void;
    question(query: string, callback: (answer: string) => void): void;
    pause(): this;
    resume(): this;
    close(): void;
    write(data: string | Buffer, key?: Key): void;
  }

  export interface Completer {
    (line: string): CompleterResult;
    (line: string, callback: (err: any, result: CompleterResult) => void): any;
  }

  export interface CompleterResult {
    completions: string[];
    line: string;
  }

  export interface InterfaceOptions {
    input: NodeJS.ReadableStream;
    output: NodeJS.WritableStream;
    completer?: Completer;
    terminal?: boolean;
  }

  export function createInterface(options: InterfaceOptions): Interface;
}

declare module "vm" {
  export interface Context { }
  export interface Script {
    runInThisContext(): void;
    runInNewContext(sandbox?: Context): void;
  }
  export function runInThisContext(code: string, filename?: string): void;
  export function runInNewContext(code: string, sandbox?: Context, filename?: string): void;
  export function runInContext(code: string, context: Context, filename?: string): void;
  export function createContext(initSandbox?: Context): Context;
  export function createScript(code: string, filename?: string): Script;
}

declare module "child_process" {
  import * as events from "events";
  import * as stream from "stream";
  import * as buffer from "buffer";
  import * as net from "net";

  export class ChildProcess extends events.EventEmitter implements
    events.Listener<'close', (code: number, signal: string) => void>,
    events.Listener<'error', (error: Error) => void>,
    events.Listener<'exit', ((code: number, signal: string | null) => void) | ((code: number | null, signal: string) => void)>,
    events.Listener<'message', (message: any, sendHandle?: net.Socket | net.Server) => void>,
    events.Listener<'disconnect', () => void> {
    stdin: stream.Writable;
    stdout: stream.Readable;
    stderr: stream.Readable;
    stdio: [stream.Writable, stream.Readable, stream.Readable];
    pid: number;
    kill(signal?: string): void;
    send(message: any, sendHandle?: any): void;
    connected: boolean;
    disconnect(): void;
    unref(): void;
  }

  export interface SpawnOptions {
    cwd?: string;
    env?: any;
    stdio?: any;
    detached?: boolean;
    uid?: number;
    gid?: number;
  }

  export function spawn(command: string, args?: string[], options?: SpawnOptions): ChildProcess;

  export interface ExecOptions {
    cwd?: string;
    env?: any;
    timeout?: number;
    maxBuffer?: number;
    killSignal?: string;
    encoding?: buffer.Encoding | 'buffer';
  }

  export function exec(command: string, callback?: (error: Error, stdout: string, stderr: string) => void): ChildProcess;
  export function exec(command: string, options: ExecOptions & { encoding: 'buffer' }, callback?: (error: Error, stdout: Buffer, stderr: Buffer) => void): ChildProcess;
  export function exec(command: string, options: ExecOptions, callback?: (error: Error, stdout: string, stderr: string) => void): ChildProcess;

  export interface ExecFileOptions {
    cwd?: string;
    env?: any;
    timeout?: number;
    maxBuffer?: number;
    killSignal?: string;
    encoding?: buffer.Encoding | 'buffer';
  }

  export function execFile(file: string, callback?: (error: Error, stdout: string, stderr: string) => void): ChildProcess;
  export function execFile(file: string, options?: ExecFileOptions & { encoding: 'buffer' }, callback?: (error: Error, stdout: Buffer, stderr: Buffer) => void): ChildProcess;
  export function execFile(file: string, options?: ExecFileOptions, callback?: (error: Error, stdout: string, stderr: string) => void): ChildProcess;
  export function execFile(file: string, args?: string[], callback?: (error: Error, stdout: string, stderr: string) => void): ChildProcess;
  export function execFile(file: string, args?: string[], options?: ExecFileOptions & { encoding: 'buffer' }, callback?: (error: Error, stdout: Buffer, stderr: Buffer) => void): ChildProcess;
  export function execFile(file: string, args?: string[], options?: ExecFileOptions, callback?: (error: Error, stdout: string, stderr: string) => void): ChildProcess;

  export interface ForkOptions {
    cwd?: string;
    env?: any;
    execPath?: string;
    execArgv?: string[];
    silent?: boolean;
  }

  export function fork(modulePath: string, args?: string[], options?: ForkOptions): ChildProcess;
}

declare module "url" {
  export interface Url {
    href?: string;
    protocol?: string;
    auth?: string;
    hostname?: string;
    port?: string;
    host?: string;
    pathname?: string;
    search?: string;
    query?: string | any;
    slashes?: boolean;
    hash?: string;
    path?: string;
  }

  export function parse(urlStr: string, parseQueryString?: boolean, slashesDenoteHost?: boolean): Url;
  export function format(url: Url): string;
  export function resolve(from: string, to: string): string;
}

declare module "dns" {
  export function lookup(domain: string, family: number, callback: (err: Error, address: string, family: number) => void): string;
  export function lookup(domain: string, callback: (err: Error, address: string, family: number) => void): string;
  export function resolve(domain: string, rrtype: string, callback: (err: Error, addresses: string[]) => void): string[];
  export function resolve(domain: string, callback: (err: Error, addresses: string[]) => void): string[];
  export function resolve4(domain: string, callback: (err: Error, addresses: string[]) => void): string[];
  export function resolve6(domain: string, callback: (err: Error, addresses: string[]) => void): string[];
  export function resolveMx(domain: string, callback: (err: Error, addresses: string[]) => void): string[];
  export function resolveTxt(domain: string, callback: (err: Error, addresses: string[]) => void): string[];
  export function resolveSrv(domain: string, callback: (err: Error, addresses: string[]) => void): string[];
  export function resolveNs(domain: string, callback: (err: Error, addresses: string[]) => void): string[];
  export function resolveCname(domain: string, callback: (err: Error, addresses: string[]) => void): string[];
  export function reverse(ip: string, callback: (err: Error, domains: string[]) => void): string[];
}

declare module "net" {
  import stream = require("stream");

  export class Socket extends stream.Duplex {
    constructor(options?: { fd?: string; type?: string; allowHalfOpen?: boolean; });

    // Extended base methods
    write(buffer: Buffer): boolean;
    write(buffer: Buffer, cb?: Function): boolean;
    write(str: string, cb?: Function): boolean;
    write(str: string, encoding?: string, cb?: Function): boolean;
    write(str: string, encoding?: string, fd?: string): boolean;

    connect(port: number, host?: string, connectionListener?: Function): void;
    connect(path: string, connectionListener?: Function): void;
    bufferSize: number;
    setEncoding(encoding?: string): void;
    write(data: any, encoding?: string, callback?: Function): void;
    destroy(): void;
    pause(): void;
    resume(): void;
    setTimeout(timeout: number, callback?: Function): void;
    setNoDelay(noDelay?: boolean): void;
    setKeepAlive(enable?: boolean, initialDelay?: number): void;
    address(): { port: number; family: string; address: string; };
    unref(): void;
    ref(): void;

    remoteAddress: string;
    remotePort: number;
    bytesRead: number;
    bytesWritten: number;

    // Extended base methods
    end(): void;
    end(buffer: Buffer, cb?: Function): void;
    end(str: string, cb?: Function): void;
    end(str: string, encoding?: string, cb?: Function): void;
    end(data?: any, encoding?: string): void;
  }

  export class Server extends Socket {
    listen(port: number, host?: string, backlog?: number, listeningListener?: Function): this;
    listen(path: string, listeningListener?: Function): this;
    listen(handle: any, listeningListener?: Function): this;
    close(callback?: Function): this;
    address(): { port: number; family: string; address: string; };
    maxConnections: number;
    connections: number;
  }

  export function createServer(connectionListener?: (socket: Socket) => void): Server;
  export function createServer(options?: { allowHalfOpen?: boolean; }, connectionListener?: (socket: Socket) => void): Server;
  export function connect(options: { port: number, host?: string, localAddress?: string, allowHalfOpen?: boolean; }, connectionListener?: Function): Socket;
  export function connect(port: number, host?: string, connectionListener?: Function): Socket;
  export function connect(path: string, connectionListener?: Function): Socket;
  export function createConnection(options: { port: number, host?: string, localAddress?: string, allowHalfOpen?: boolean; }, connectionListener?: Function): Socket;
  export function createConnection(port: number, host?: string, connectionListener?: Function): Socket;
  export function createConnection(path: string, connectionListener?: Function): Socket;
  export function isIP(input: string): number;
  export function isIPv4(input: string): boolean;
  export function isIPv6(input: string): boolean;
}

declare module "dgram" {
  import events = require("events");

  interface RemoteInfo {
    address: string;
    port: number;
    size: number;
  }

  interface AddressInfo {
    address: string;
    family: string;
    port: number;
  }

  export function createSocket(type: string, callback?: (msg: Buffer, rinfo: RemoteInfo) => void): Socket;

  interface Socket extends events.EventEmitter {
    send(buf: Buffer, offset: number, length: number, port: number, address: string, callback?: (error: Error, bytes: number) => void): void;
    bind(port: number, address?: string, callback?: () => void): void;
    close(): void;
    address(): AddressInfo;
    setBroadcast(flag: boolean): void;
    setMulticastTTL(ttl: number): void;
    setMulticastLoopback(flag: boolean): void;
    addMembership(multicastAddress: string, multicastInterface?: string): void;
    dropMembership(multicastAddress: string, multicastInterface?: string): void;
  }
}

declare module "fs" {
  import * as stream from "stream";
  import * as events from "events";
  import * as buffer from "buffer";

  /**
   * Objects returned from `fs.stat()`, `fs.lstat()` and `fs.fstat()` and their synchronous counterparts are of this type.
   */
  export class Stats {
    isFile(): boolean;
    isDirectory(): boolean;
    isBlockDevice(): boolean;
    isCharacterDevice(): boolean;
    isSymbolicLink(): boolean;
    isFIFO(): boolean;
    isSocket(): boolean;
    dev: number;
    ino: number;
    mode: number;
    nlink: number;
    uid: number;
    gid: number;
    rdev: number;
    size: number;
    blksize: number;
    blocks: number;
    /**
     * "Access Time" - Time when file data last accessed. Changed by the `mknod(2)`, `utimes(2)`, and `read(2)` system calls.
     */
    atime: Date;
    /**
     * "Modified Time" - Time when file data last modified. Changed by the `mknod(2)`, `utimes(2)`, and `write(2)` system calls.
     */
    mtime: Date;
    /**
     * "Change Time" - Time when file status was last changed (inode data modification). Changed by the `chmod(2)`, `chown(2)`, `link(2)`, `mknod(2)`, `rename(2)`, `unlink(2)`,` utimes(2)`, `read(2)`, and `write(2)` system calls.
     */
    ctime: Date;
    /**
     * "Birth Time" - Time of file creation. Set once when the file is created. On filesystems where birthtime is not available, this field may instead hold either the `ctime` or `1970-01-01T00:00Z` (ie, unix epoch timestamp `0`). Note that this value may be greater than `atime` or `mtime` in this case. On Darwin and other FreeBSD variants, also set if the `atime` is explicitly set to an earlier value than the current `birthtime` using the `utimes(2)` system call.
     */
    birthtime: Date;
  }

  export type WatchListener = (eventType: string, filename?: string) => void;

  /**
   * Objects returned from fs.watch() are of this type.
   */
  export class FSWatcher extends events.EventEmitter implements
    events.Listener<'change', WatchListener> {
    close(): void;
  }

  export class ReadStream extends stream.Readable implements
    events.Listener<'open', (fd: number) => void>,
    events.Listener<'close', () => void> {
    bytesRead: number;
    path: string;
    close(): void;
  }

  export class WriteStream extends stream.Writable implements
    events.Listener<'open', (fd: number) => void>,
    events.Listener<'close', () => void> {
    close(): void;
    bytesWritten: number;
    path: string;
  }

  export const F_OK: number;
  export const R_OK: number;
  export const W_OK: number;
  export const X_OK: number;

  export interface AppendFileOptions {
    encoding?: buffer.Encoding;
    mode?: number;
    flag?: string;
  }

  /**
   * Asynchronously append data to a file, creating the file if it does not yet exist. `data` can be a string or a buffer.
   */
  export function appendFile(filename: string, data: string | Buffer, callback: (err: NodeJS.ErrnoException | null) => void): void;
  export function appendFile(filename: string, data: string | Buffer, options: buffer.Encoding | AppendFileOptions, callback: (err: NodeJS.ErrnoException | null) => void): void;

  /**
   * The synchronous version of `fs.appendFile()`.
   */
  export function appendFileSync(filename: string, data: string | Buffer, options?: AppendFileOptions): void;

  /**
   * Asynchronous chmod(2).
   */
  export function chmod(path: string, mode: number, callback: (err: NodeJS.ErrnoException | null) => void): void;

  /**
   * Synchronous chmod(2).
   */
  export function chmodSync(path: string, mode: number): void;

  /**
   * Asynchronous chown(2).
   */
  export function chown(path: string, uid: number, gid: number, callback: (err: NodeJS.ErrnoException | null) => void): void;

  /**
   * Synchronous chown(2).
   */
  export function chownSync(path: string, uid: number, gid: number): void;

  /**
   * Asynchronous close(2).
   */
  export function close(fd: number, callback: (err: NodeJS.ErrnoException | null) => void): void;

  /**
   * Synchronous close(2).
   */
  export function closeSync(fd: number): void;

  export interface ReadStreamOptions {
    flags?: string;
    encoding?: buffer.Encoding;
    fd?: number;
    mode?: number;
    autoClose?: boolean;
  }

  /**
   * Returns a new ReadStream object.
   *
   * Be aware that, unlike the default value set for `highWaterMark` on a readable stream (16 kb), the stream returned by this method has a default value of 64 kb for the same parameter.
   */
  export function createReadStream(path: string, options?: ReadStreamOptions): ReadStream;

  export interface WriteStreamOptions {
    flags?: string;
    encoding?: buffer.Encoding;
    mode?: number;
  }

  /**
   * Returns a new WriteStream object.
   */
  export function createWriteStream(path: string, options?: WriteStreamOptions): WriteStream;

  /**
   * Test whether or not the given path exists by checking with the file system. Then call the `callback` argument with either true or false.
   */
  export function exists(path: string, callback: (exists: boolean) => void): void;

  /**
   * Synchronous version of `fs.exists()`. Returns true if the file exists, false otherwise.
   */
  export function existsSync(path: string): boolean;

  /**
   * Asynchronous fchmod(2).
   */
  export function fchmod(fd: number, mode: number, callback: (err: NodeJS.ErrnoException | null) => void): void;

  /**
   * Synchronous fchmod(2).
   */
  export function fchmodSync(fd: number, mode: number): void;

  /**
   * Asynchronous fchown(2).
   */
  export function fchown(fd: number, uid: number, gid: number, callback: (err: NodeJS.ErrnoException | null) => void): void;

  /**
   * Synchronous fchown(2).
   */
  export function fchownSync(fd: number, uid: number, gid: number): void;

  /**
   * Asynchronous fdatasync(2).
   */
  export function fdatasync(fd: number, callback: (err: NodeJS.ErrnoException | null) => void): void;

  /**
   * Synchronous fdatasync(2).
   */
  export function fdatasyncSync(fd: number): void;

  /**
   * Asynchronous fstat(2).
   */
  export function fstat(fd: number, callback: (err: NodeJS.ErrnoException | null, stats: Stats) => void): void;

  /**
   * Synchronous fstat(2).
   */
  export function fstatSync(fd: number): Stats;

  /**
   * Asynchronous fsync(2).
   */
  export function fsync(fd: number, callback: (err: NodeJS.ErrnoException | null) => void): void;

  /**
   * Synchronous fsync(2).
   */
  export function fsyncSync(fd: number): void;

  /**
   * Asynchronous ftruncate(2).
   *
   * If the file referred to by the file descriptor was larger than `len` bytes, only the first `len` bytes will be retained in the file.
   *
   * If the file previously was shorter than `len` bytes, it is extended, and the extended part is filled with null bytes ('\0').
   */
  export function ftruncate(fd: number, len: number | null | undefined, callback: (err: NodeJS.ErrnoException | null) => void): void;

  /**
   * Synchronous ftruncate(2).
   */
  export function ftruncateSync(fd: number, len?: number | null): void;

  /**
   * Change the file timestamps of a file referenced by the supplied file descriptor.
   */
  export function futimes(fd: number, atime: number, mtime: number, callback: (err: NodeJS.ErrnoException | null) => void): void;

  /**
   * Synchronous version of `fs.futimes()`.
   */
  export function futimesSync(fd: number, atime: number, mtime: number): void;

  /**
   * Asynchronous lchmod(2).
   *
   * Only available on Mac OS X.
   *
   * @deprecated
   */
  export function lchmod(path: string, mode: number, callback: (err: NodeJS.ErrnoException | null) => void): void;

  /**
   * Synchronous lchmod(2).
   *
   * @deprecated
   */
  export function lchmodSync(path: string, mode: number): void;

  /**
   * Asynchronous lchown(2).
   *
   * @deprecated
   */
  export function lchown(path: string, uid: number, gid: number, callback: (err: NodeJS.ErrnoException | null) => void): void;

  /**
   * Synchronous lchown(2).
   *
   * @deprecated
   */
  export function lchownSync(path: string, uid: number, gid: number): void;

  /**
   * Asynchronous link(2).
   */
  export function link(existingPath: string, newPath: string, callback: (err: NodeJS.ErrnoException | null) => void): void;

  /**
   * Synchronous link(2).
   */
  export function linkSync(existingPath: string, newPath: string): void;

  /**
   * Asynchronous lstat(2). `lstat()` is identical to `stat()`, except that if `path` is a symbolic link, then the link itself is stat-ed, not the file that it refers to.
   */
  export function lstat(path: string, callback: (err: NodeJS.ErrnoException | null, stats: Stats) => void): void;

  /**
   * Synchronous lstat(2).
   */
  export function lstatSync(path: string): Stats;

  /**
   * Asynchronous mkdir(2). `mode` defaults to `0o777`.
   */
  export function mkdir(path: string, callback: (err: NodeJS.ErrnoException | null) => void): void;
  export function mkdir(path: string, mode: number, callback: (err: NodeJS.ErrnoException | null) => void): void;

  /**
   * Synchronous mkdir(2).
   */
  export function mkdirSync(path: string, mode?: number): void;

  /**
   * Asynchronous file open. See open(2). `flags` can be:
   *
   * 'r' - Open file for reading. An exception occurs if the file does not exist.
   *
   * 'r+' - Open file for reading and writing. An exception occurs if the file does not exist.
   *
   * 'rs+' - Open file for reading and writing in synchronous mode. Instructs the operating system to bypass the local file system cache.
   *
   * This is primarily useful for opening files on NFS mounts as it allows you to skip the potentially stale local cache. It has a very real impact on I/O performance so don't use this flag unless you need it.
   *
   * Note that this doesn't turn `fs.open()` into a synchronous blocking call. If that's what you want then you should be using `fs.openSync()`
   *
   * 'w' - Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
   *
   * 'wx' - Like `'w'` but fails if `path` exists.
   *
   * 'w+' - Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
   *
   * 'wx+' - Like `'w+'` but fails if `path` exists.
   *
   * 'a' - Open file for appending. The file is created if it does not exist.
   *
   * 'ax' - Like 'a' but fails if `path` exists.
   *
   * 'a+' - Open file for reading and appending. The file is created if it does not exist.
   *
   * 'ax+' - Like 'a+' but fails if `path` exists.
   *
   * `mode` sets the file mode (permission and sticky bits), but only if the file was created. It defaults to `0666`, readable and writable.
   */
  export function open(path: string, flags: string | number, callback: (err: NodeJS.ErrnoException | null, fd: number) => void): void;
  export function open(path: string, flags: string | number, mode: number, callback: (err: NodeJS.ErrnoException | null, fd: number) => void): void;

  /**
   * Synchronous version of `fs.open()`.
   */
  export function openSync(path: string, flags: string | number, mode?: number): number;

  /**
   * Read data from the file specified by fd.
   *
   * @param buffer is the buffer that the data will be written to.
   * @param offset is the offset in the buffer to start writing at.
   * @param length is an integer specifying the number of bytes to read.
   * @param position is an integer specifying where to begin reading from in the file. If position is null, data will be read from the current file position.
   */
  export function read(fd: number, buffer: string | Buffer, offset: number, length: number, position: number, callback: (err: NodeJS.ErrnoException | null, bytesRead: number, buffer: Buffer) => void): void;

  export interface ReaddirOptions {
    encoding?: buffer.Encoding;
  }

  /**
   * Asynchronous readdir(3). Reads the contents of a directory.
   *
   * @param files is an array of the names of the files in the directory excluding '.' and '..'.
   */
  export function readdir(path: string, callback: (err: NodeJS.ErrnoException | null, files: string[]) => void): void;
  export function readdir(path: string, options: buffer.Encoding | ReaddirOptions, callback: (err: NodeJS.ErrnoException | null, files: string[]) => void): void;

  /**
   * Synchronous readdir(3). Returns an array of filenames excluding '.' and '..'.
   */
  export function readdirSync(path: string): string[];
  export function readdirSync(path: string, options: buffer.Encoding | ReaddirOptions): string[];

  export interface ReadFileOptions {
    encoding?: buffer.Encoding;
    flag?: string;
  }

  /**
   * Asynchronously reads the entire contents of a file.
   */
  export function readFile(filename: string, callback: (err: NodeJS.ErrnoException | null, data: Buffer) => void): void;
  export function readFile(filename: string, options: buffer.Encoding | (ReadFileOptions & { encoding: buffer.Encoding }), callback: (err: NodeJS.ErrnoException | null, data: string) => void): void;
  export function readFile(filename: string, options: ReadFileOptions, callback: (err: NodeJS.ErrnoException | null, data: Buffer) => void): void;

  /**
   * Synchronous version of `fs.readFile`.
   */
  export function readFileSync(filename: string): Buffer;
  export function readFileSync(filename: string, options: buffer.Encoding | (ReadFileOptions & { encoding: buffer.Encoding })): string;
  export function readFileSync(filename: string, options: ReadFileOptions): Buffer;

  export interface ReadlinkOptions {
    encoding?: buffer.Encoding;
  }

  /**
   * Asynchronous readlink(2).
   */
  export function readlink(path: string, callback: (err: NodeJS.ErrnoException | null, linkString: string) => void): void;
  export function readlink(path: string, options: buffer.Encoding | ReadlinkOptions, callback: (err: NodeJS.ErrnoException | null, linkString: Buffer) => void): void;

  /**
   * Synchronous readlink(2).
   */
  export function readlinkSync(path: string): string;
  export function readlinkSync(path: string, options: buffer.Encoding | ReadlinkOptions): string;

  /**
   * Synchronous version of `fs.read()`.
   */
  export function readSync(fd: number, buffer: string | Buffer, offset: number, length: number, position: number): number;

  export interface RealpathOptions {
    encoding?: buffer.Encoding;
  }

  /**
   * Asynchronous realpath(3). May use `process.cwd` to resolve relative paths.
   *
   * Only paths that can be converted to UTF8 strings are supported.
   */
  export function realpath(path: string, callback: (err: NodeJS.ErrnoException | null, resolvedPath: string) => void): void;
  export function realpath(path: string, options: buffer.Encoding | RealpathOptions, callback: (err: NodeJS.ErrnoException | null, resolvedPath: Buffer) => void): void;

  /**
   * Synchronous realpath(3). Returns the resolved path.
   *
   * Only paths that can be converted to UTF8 strings are supported.
   */
  export function realpathSync(path: string): string;
  export function realpathSync(path: string, options: buffer.Encoding | RealpathOptions): string;

  /**
   * Asynchronous rename(2).
   */
  export function rename(oldPath: string, newPath: string, callback: (err: NodeJS.ErrnoException | null) => void): void;

  /**
   * Synchronous rename(2).
   */
  export function renameSync(oldPath: string, newPath: string): void;

  /**
   * Asynchronous rmdir(2).
   */
  export function rmdir(path: string, callback: (err: NodeJS.ErrnoException | null) => void): void;

  /**
   * Synchronous rmdir(2).
   */
  export function rmdirSync(path: string): void;

  /**
   * Asynchronous stat(2).
   *
   * In case of an error, the `err.code` will be one of Common System Errors.
   *
   * Using `fs.stat()` to check for the existence of a file before calling `fs.open()`, `fs.readFile()` or `fs.writeFile()` is not recommended. Instead, user code should open/read/write the file directly and handle the error raised if the file is not available.
   *
   * To check if a file exists without manipulating it afterwards, `fs.access()` is recommended.
   */
  export function stat(path: string, callback: (err: NodeJS.ErrnoException | null, stats: Stats) => void): void;

  /**
   * Synchronous stat(2).
   */
  export function statSync(path: string): Stats;

  /**
   * Asynchronous symlink(2). The type argument is only available on Windows (ignored on other platforms). Note that Windows junction points require the destination path to be absolute. When using `'junction'`, the target argument will automatically be normalized to absolute path.
   */
  export function symlink(target: string, path: string, callback: (err: NodeJS.ErrnoException | null) => void): void;
  export function symlink(target: string, path: string, type: 'dir' | 'file' | 'junction', callback: (err: NodeJS.ErrnoException | null) => void): void;

  /**
   * Synchronous symlink(2).
   */
  export function symlinkSync(target: string, path: string, type?: 'dir' | 'file' | 'junction'): void;

  /**
   * Asynchronous truncate(2).
   */
  export function truncate(path: string, len: number, callback: (err: NodeJS.ErrnoException | null) => void): void;

  /**
   * Synchronous truncate(2).
   */
  export function truncateSync(path: string, len?: number): void;

  /**
   * Asynchronous unlink(2).
   */
  export function unlink(path: string, callback: (err: NodeJS.ErrnoException | null) => void): void;

  /**
   * Synchronous unlink(2).
   */
  export function unlinkSync(path: string): void;

  /**
   * Stop watching for changes on `filename`. If `listener` is specified, only that particular listener is removed. Otherwise, _all_ listeners are removed and you have effectively stopped watching `filename`.
   *
   * Calling `fs.unwatchFile()` with a filename that is not being watched is a no-op, not an error.
   *
   * Note: `fs.watch()` is more efficient than `fs.watchFile()` and `fs.unwatchFile()`. `fs.watch()` should be used instead of `fs.watchFile()` and `fs.unwatchFile()` when possible.
   */
  export function unwatchFile(filename: string, listener?: WatchListener): void;

  /**
   * Change file timestamps of the file referenced by the supplied path.
   *
   * Note: the arguments `atime` and `mtime` of the following related functions follow these rules:
   *
   * - The value should be a Unix timestamp in seconds. For example, `Date.now()` returns milliseconds, so it should be divided by 1000 before passing it in.
   * If the value is a numeric string like `'123456789'`, the value will get converted to the corresponding number.
   * If the value is `NaN` or `Infinity`, the value will get converted to `Date.now() / 1000`.
   */
  export function utimes(path: string, atime: number, mtime: number, callback: (err: NodeJS.ErrnoException | null) => void): void;

  /**
   * Synchronous version of `fs.utimes()`.
   */
  export function utimesSync(path: string, atime: number, mtime: number): void;

  export interface WatchOptions {
    /**
     * Indicates whether the process should continue to run as long as files are being watched. default = `true`.
     */
    persistent?: boolean;
    /**
     * Indicates whether all subdirectories should be watched, or only the current directory. The applies when a directory is specified, and only on supported platforms (See Caveats). default = `false`.
     */
    recursive?: boolean;
  }

  /**
   * Watch for changes on `filename`, where `filename` is either a file or a directory. The returned object is a `fs.FSWatcher`.
   *
   * Please note the listener callback is attached to the `'change'` event fired by `fs.FSWatcher`, but they are not the same thing.
   */
  export function watch(filename: string): FSWatcher;
  export function watch(filename: string, options: buffer.Encoding | WatchOptions): FSWatcher;
  export function watch(filename: string, listener: WatchListener): FSWatcher;
  export function watch(filename: string, options: buffer.Encoding | WatchOptions, listener: WatchListener): FSWatcher;

  export interface WatchFileOptions {
    /**
     * Indicates whether the process should continue to run as long as files are being watched
     */
    persistent: boolean;
    /**
     * Indicates how often the target should be polled in milliseconds. The default is `5007`.
     */
    interval: number;
  }

  /**
   * Watch for changes on filename. The callback listener will be called each time the file is accessed.
   *
   * Note: when an `fs.watchFile` operation results in an `ENOENT` error, it will invoke the listener once, with all the fields zeroed (or, for dates, the Unix Epoch). In Windows, `blksize` and `blocks` fields will be `undefined`, instead of zero. If the file is created later on, the listener will be called again, with the latest stat objects.
   *
   * Note: `fs.watch()` is more efficient than `fs.watchFile` and `fs.unwatchFile`. `fs.watch` should be used instead of `fs.watchFile` and `fs.unwatchFile` when possible.
   */
  export function watchFile(filename: string, listener: (curr: Stats, prev: Stats) => void): void;
  export function watchFile(filename: string, options: WatchFileOptions, listener: (curr: Stats, prev: Stats) => void): void;

  /**
   * Write `buffer` to the file specified by `fd`.
   *
   * `offset` and `length` determine the part of the buffer to be written.
   *
   * `position` refers to the offset from the beginning of the file where this data should be written. If `typeof position !== 'number'`, the data will be written at the current position. See pwrite(2).
   *
   * Note that it is unsafe to use `fs.write` multiple times on the same file without waiting for the callback. For this scenario, `fs.createWriteStream` is strongly recommended.
   *
   * On Linux, positional writes don't work when the file is opened in append mode. The kernel ignores the position argument and always appends the data to the end of the file.
   */
  export function write(fd: number, buffer: string | Buffer, offset: number, length: number, callback: (err: NodeJS.ErrnoException | null, written: number, buffer: Buffer) => void): void;
  export function write(fd: number, buffer: string | Buffer, offset: number, length: number, position: number, callback: (err: NodeJS.ErrnoException | null, written: number, buffer: Buffer) => void): void;

  export interface WriteFileOptions {
    encoding?: buffer.Encoding;
    mode?: number;
    flag?: string;
  }

  /**
   * Asynchronously writes data to a file, replacing the file if it already exists.
   *
   * Note that it is unsafe to use `fs.writeFile` multiple times on the same file without waiting for the callback. For this scenario, `fs.createWriteStream` is strongly recommended.
   *
   * Note: If a file descriptor is specified as the `file`, it will not be closed automatically.
   */
  export function writeFile(filename: string, data: string | Buffer, callback: (err: NodeJS.ErrnoException | null) => void): void;
  export function writeFile(filename: string, data: string | Buffer, options: buffer.Encoding | WriteFileOptions, callback: (err: NodeJS.ErrnoException | null) => void): void;

  /**
   * The synchronous version of `fs.writeFile()`.
   */
  export function writeFileSync(filename: string, data: string | Buffer, options?: buffer.Encoding | WriteFileOptions): void;

  /**
   * Synchronous `fs.write`.
   */
  export function writeSync(fd: number, buffer: string | Buffer, offset: number, length: number, position?: number): void;
}

declare module "path" {
  export function normalize(p: string): string;
  export function join(...paths: string[]): string;
  export function resolve(...pathSegments: string[]): string;
  export function relative(from: string, to: string): string;
  export function dirname(p: string): string;
  export function basename(p: string, ext?: string): string;
  export function extname(p: string): string;
  export var sep: string;
}

declare module "string_decoder" {
  export interface NodeStringDecoder {
    write(buffer: Buffer): string;
    detectIncompleteChar(buffer: Buffer): number;
  }
  export var StringDecoder: {
    new (encoding: string): NodeStringDecoder;
  };
}

declare module "tls" {
  import * as crypto from "crypto";
  import * as net from "net";
  import * as stream from "stream";

  export var CLIENT_RENEG_LIMIT: number;
  export var CLIENT_RENEG_WINDOW: number;
  export var SLAB_BUFFER_SIZE: number;
  export var DEFAULT_CIPHERS: string;
  export var DEFAULT_ECDH_CURVE: string;

  export class Server extends net.Server {
    /**
     * Add secure context that will be used if client request's SNI hostname is matching passed `hostname` (wildcards can be used). `credentials` can contain `key`, `cert` and `ca`.
     */
    addContext(hostName: string, credentials: { key: string, cert: string, ca: string }): void;
    /**
     * Set this property to reject connections when the server's connection count gets high.
     */
    maxConnections: number;
    /**
     * Returns the current number of concurrent connections on the server.
     */
    connections: number;
  }

  export interface Certificate {
    /**
     * Country code.
     */
    C: string;
    /**
     * Street.
     */
    ST: string;
    /**
     * Locality.
     */
    L: string;
    /**
     * Organization.
     */
    O: string;
    /**
     * Organizational unit.
     */
    OU: string;
    /**
     * Common name.
     */
    CN: string;
  }

  export interface Cipher {
    /**
     * The cipher name.
     */
    name: string;
    /**
     * SSL/TLS protocol version.
     */
    version: string;
  }

  export interface PeerCertificate {
    subject: Certificate;
    issuerInfo: Certificate;
    issuer: Certificate;
    raw: Buffer;
    valid_from: string;
    valid_to: string;
    fingerprint: string;
    serialNumber: string;
  }

  export class CleartextStream extends stream.Duplex {
    /**
     * Returns `true` if the peer certificate was signed by one of the CAs specified when creating the `tls.TLSSocket` instance, otherwise `false`.
     */
    authorized: boolean;
    /**
     * Returns the reason why the peer's certificate was not been verified. This property is set only when `tlsSocket.authorized === false`.
     */
    authorizationError?: Error;
    /**
     * Returns an object representing the cipher name and the SSL/TLS protocol version that first defined the cipher.
     */
    getCipher(): Cipher;
    /**
     * Returns an object representing the peer's certificate. The returned object has some properties corresponding to the fields of the certificate.
     *
     * @param detailed Specify `true` to request that the full certificate chain with the `issuer` property be returned; false to return only the top certificate without the `issuer` property.
     */
    getPeerCertificate(detailed?: boolean): PeerCertificate;
    /**
     * Returns the bound address, the address family name and port of the underlying socket as reported by the operating system. Returns an object with three properties, e.g. `{ port: 12346, family: 'IPv4', address: '127.0.0.1' }`.
     */
    address(): { port: number; family: string; address: string; };
    /**
     * Returns the string representation of the remote IP address. For example, `'74.125.127.100'` or `'2001:4860:a005::68'`.
     */
    remoteAddress: string;
    /**
     * The numeric representation of the remote port. For example, 443.
     */
    remotePort: number;
  }

  export interface ConnectOptions {
    /**
     * Host the client should connect to.
     */
    host?: string;
    /**
     * Port the client should connect to.
     */
    port?: number | string;
    /**
     * Establish secure connection on a given socket rather than creating a new socket. If this option is specified, `host` and `port` are ignored.
     */
    socket?: net.Socket;
    /**
     * A `string` or `Buffer` containing the private key, certificate, and CA certs of the client in PFX or PKCS12 format.
     */
    pfx?: string | Buffer;
    /**
     *  A string or `Buffer` containing the private key of the client in PEM format.
     */
    key?: string | Buffer;
    /**
     * A string containing the passphrase for the private key or pfx.
     */
    passphrase?: string;
    /**
     * A string or `Buffer` containing the certificate key of the client in PEM format.
     */
    cert?: string | Buffer;
    /**
     * A string or `Buffer` of trusted certificates in PEM format. If this is omitted several well known "root" CAs (like VeriSign) will be used. These are used to authorize connections.
     */
    ca?: string | Buffer;
    /**
     * If true, the server certificate is verified against the list of supplied CAs. An `'error'` event is emitted if verification fails; `err.code` contains the OpenSSL error code. Defaults to `true`.
     */
    rejectUnauthorized?: boolean;
    /**
     * An array of strings or `Buffer`s containing supported NPN protocols. `Buffer`s should have the format `[len][name][len][name]...` e.g. `0x05hello0x05world`, where the first byte is the length of the next protocol name. Passing an array is usually much simpler, e.g. `['hello', 'world']`.
     */
    NPNProtocols?: string[] | Buffer[];
    /**
     * Server name for the SNI (Server Name Indication) TLS extension.
     */
    servername?: string;
    /**
     * The SSL method to use, e.g., `SSLv3_method` to force SSL version 3. The possible values depend on the version of OpenSSL installed in the environment and are defined in the constant SSL_METHODS.
     */
    secureProtocol?: string;
  }

  export interface CreateServerOptions {
    /**
     * A `string` or `Buffer` containing the private key, certificate and CA certs of the server in PFX or PKCS12 format. (Mutually exclusive with the `key`, `cert`, and `ca` options.)
     */
    pfx?: string | Buffer;
    /**
     * A string or `Buffer` containing the private key of the server in PEM format. (Required)
     */
    key?: string | Buffer;
    /**
     * A string of passphrase for the private key or pfx.
     */
    passphrase?: string;
    /**
     * A string or `Buffer` containing the certificate key of the server in PEM format. (Required).
     */
    cert?: string | Buffer;
    /**
     * An array of strings or `Buffer`s of trusted certificates in PEM format. If this is omitted several well known "root" CAs will be used, like VeriSign. These are used to authorize connections.
     */
    ca?: string | Buffer;
    /**
     * Either a string or array of strings of PEM encoded CRLs (Certificate Revocation List).
     */
    crl?: string | string[];
    /**
     * A string describing the ciphers to use or exclude, separated by `:`.
     */
    ciphers?: string;
    /**
     * Abort the connection if the SSL/TLS handshake does not finish in the specified number of milliseconds. Defaults to `120` seconds. A `'clientError'` is emitted on the `tls.Server` object whenever a handshake times out.
     */
    handshakeTimeout?: number;
    /**
     * When choosing a cipher, use the server's preferences instead of the client preferences. Defaults to `true`.
     */
    honorCipherOrder?: boolean;
    /**
     * If `true` the server will request a certificate from clients that connect and attempt to verify that certificate. Defaults to `false`.
     */
    requestCert?: boolean;
    /**
     * If `true` the server will reject any connection which is not authorized with the list of supplied CAs. This option only has an effect if `requestCert` is `true`. Defaults to `false`.
     */
    rejectUnauthorized?: boolean;
    /**
     * An array of strings or a `Buffer` naming possible NPN protocols. (Protocols should be ordered by their priority.)
     */
    NPNProtocols?: string[] | Buffer;
    /**
     *  function that will be called if client supports SNI TLS extension. Only one argument will be passed to it: servername. And SNICallback should return SecureContext instance. (You can use `crypto.createCredentials(...).context` to get proper SecureContext). If `SNICallback` wasn't provided - default callback with high-level API will be used (see below).
     */
    SNICallback?: (servername: string) => any;
    /**
     * A string containing an opaque identifier for session resumption. If `requestCert` is true, the default is a 128 bit truncated SHA1 hash value generated from the command-line. Otherwise, a default is not provided.
     */
    sessionIdContext?: string;
    /**
     * The SSL method to use, e.g., `SSLv3_method` to force SSL version 3. The possible values depend on the version of OpenSSL installed in the environment and are defined in the constant SSL_METHODS.
     */
    secureProtocol?: string;
    /**
     * Set server options. For example, to disable the SSLv3 protocol set the `SSL_OP_NO_SSLv3` flag. See SSL_CTX_set_options for all available options.
     */
    secureOptions?: string;
  }

  /**
   * Creates a new tls.Server. The secureConnectionListener, if provided, is automatically set as a listener for the `'secureConnection'` event.
   */
  export function createServer(options: CreateServerOptions, secureConnectionListener?: (cleartextStream: CleartextStream) => void): Server;

  /**
   * Creates a new client connection to the given `port` and `host` or `options.port` and `options.host`. (If `host` is omitted, it defaults to `localhost`.)
   */
  export function connect(options: ConnectOptions, callback?: () => void): CleartextStream;
  export function connect(port: number, options?: ConnectOptions, callback?: () => void): CleartextStream;
  export function connect(port: number, host?: string, options?: ConnectOptions, callback?: () => void): CleartextStream;

  /**
   * Returns an array with the names of the supported SSL ciphers.
   */
  export function getCiphers(): string[];
}

declare module "crypto" {
  import * as stream from "stream";

  export interface CredentialDetails {
    pfx: string | Buffer;
    key: string;
    passphrase: string;
    cert: string;
    ca: string | string[];
    crl: string | string[];
    ciphers: string;
  }

  export interface Credentials { context?: any; }

  export function createCredentials(details: CredentialDetails): Credentials;

  export function getCiphers(): string[];
  export function getHashes(): string[];

  export function createHash(algorithm: string): Hash;

  export class Hash extends stream.Transform {
    update(data: string | Buffer, input_encoding?: string): Hash;
    digest(encoding: 'buffer'): Buffer;
    digest(encoding: string): string;
    digest(): Buffer;
  }

  export function createHmac(algorithm: string, key: string | Buffer): Hmac;

  export class Hmac extends stream.Transform {
    update(data: string | Buffer, input_encoding?: string): Hmac;
    digest(encoding: 'buffer'): Buffer;
    digest(encoding: string): string;
    digest(): Buffer;
  }

  export function createCipher(algorithm: string, password: string | Buffer): Cipher;
  export function createCipheriv(algorithm: string, key: string | Buffer, iv: string | Buffer): Cipher;

  export class Cipher extends stream.Transform {
    update(data: Buffer): Buffer;
    update(data: string, input_encoding: "utf8" | "ascii" | "binary" | "latin1"): Buffer;
    update(data: Buffer, input_encoding: any, output_encoding: "binary" | "latin1" | "base64" | "hex"): string;
    update(data: string, input_encoding: "utf8" | "ascii" | "binary" | "latin1", output_encoding: "binary" | "latin1" | "base64" | "hex"): string;
    final(): Buffer;
    final(output_encoding: string): string;
    setAutoPadding(auto_padding: boolean): void;
  }

  export function createDecipher(algorithm: string, password: string | Buffer): Decipher;
  export function createDecipheriv(algorithm: string, key: string | Buffer, iv: string | Buffer): Decipher;

  export class Decipher extends stream.Transform {
    update(data: Buffer): Buffer;
    update(data: string, input_encoding: "binary" | "latin1" | "base64" | "hex"): Buffer;
    update(data: Buffer, input_encoding: any, output_encoding: "utf8" | "ascii" | "binary" | "latin1"): string;
    update(data: string, input_encoding: "binary" | "latin1" | "base64" | "hex", output_encoding: "utf8" | "ascii" | "binary" | "latin1"): string;
    final(): Buffer;
    final(output_encoding: string): string;
    setAutoPadding(auto_padding: boolean): void;
  }

  export function createSign(algorithm: string): Signer;

  export class Signer extends stream.Writable {
    update(data: string | Buffer): void;
    sign(private_key: string): Buffer;
    sign(private_key: string, output_format: string): string;
  }

  export function createVerify(algorith: string): Verify;

  export class Verify extends stream.Writable {
    update(data: string | Buffer): void;
    verify(object: string, signature: string, signature_format?: string): boolean;
  }

  export function createDiffieHellman(prime_length: number, generator?: number | string | Buffer): DiffieHellman;
  export function getDiffieHellman(group_name: string): DiffieHellman;

  export class DiffieHellman {
    computeSecret(other_public_key: string, input_encoding?: string, output_encoding?: string): string;
    generateKeys(encoding?: string): string;
    getPrime(encoding?: string): string;
    getGenerator(encoding?: string): string;
    getPublicKey(encoding?: string): string;
    getPrivateKey(encoding?: string): string;
    setPublicKey(public_key: string, encoding?: string): void;
    setPrivateKey(private_key: string, encoding?: string): void;
  }

  export function pbkdf2(password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, callback: (err: Error, derivedKey: Buffer) => void): void;
  export function pbkdf2(password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, digest: string, callback: (err: Error, derivedKey: Buffer) => void): void;

  export function pbkdf2Sync(password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number): Buffer;
  export function pbkdf2Sync(password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, digest: string): Buffer;

  export function randomBytes(size: number): Buffer;
  export function randomBytes(size: number, callback: (err: Error, buf: Buffer) => void): void;

  export function pseudoRandomBytes(size: number): Buffer;
  export function pseudoRandomBytes(size: number, callback: (err: Error, buf: Buffer) => void): void;
}

declare module "stream" {
  import events = require("events");

  export interface Stream extends events.EventEmitter {
    pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
  }

  export interface ReadableOptions {
    highWaterMark?: number;
    encoding?: string;
    objectMode?: boolean;
  }

  export class Readable extends events.EventEmitter implements NodeJS.ReadableStream {
    readable: boolean;
    constructor(opts?: ReadableOptions);
    _read(size: number): void;
    read(size?: number): any;
    setEncoding(encoding: string): void;
    pause(): void;
    resume(): void;
    pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
    unpipe<T extends NodeJS.WritableStream>(destination?: T): void;
    unshift(chunk: string): void;
    unshift(chunk: Buffer): void;
    wrap(oldStream: NodeJS.ReadableStream): NodeJS.ReadableStream;
    push(chunk: any, encoding?: string): boolean;
  }

  export interface WritableOptions {
    highWaterMark?: number;
    decodeStrings?: boolean;
    objectMode?: boolean;
  }

  export class Writable extends events.EventEmitter implements NodeJS.WritableStream {
    writable: boolean;
    constructor(opts?: WritableOptions);
    _write(data: Buffer, encoding: string, callback: Function): void;
    _write(data: string, encoding: string, callback: Function): void;
    write(buffer: Buffer, cb?: Function): boolean;
    write(str: string, cb?: Function): boolean;
    write(str: string, encoding?: string, cb?: Function): boolean;
    end(): void;
    end(buffer: Buffer, cb?: Function): void;
    end(str: string, cb?: Function): void;
    end(str: string, encoding?: string, cb?: Function): void;
  }

  export interface DuplexOptions extends ReadableOptions, WritableOptions {
    allowHalfOpen?: boolean;
  }

  // Note: Duplex extends both Readable and Writable.
  export class Duplex extends Readable implements NodeJS.ReadWriteStream {
    writable: boolean;
    constructor(opts?: DuplexOptions);
    _write(data: Buffer, encoding: string, callback: Function): void;
    _write(data: string, encoding: string, callback: Function): void;
    write(buffer: Buffer, cb?: Function): boolean;
    write(str: string, cb?: Function): boolean;
    write(str: string, encoding?: string, cb?: Function): boolean;
    end(): void;
    end(buffer: Buffer, cb?: Function): void;
    end(str: string, cb?: Function): void;
    end(str: string, encoding?: string, cb?: Function): void;
  }

  export interface TransformOptions extends ReadableOptions, WritableOptions { }

  // Note: Transform lacks the _read and _write methods of Readable/Writable.
  export class Transform extends events.EventEmitter implements NodeJS.ReadWriteStream {
    readable: boolean;
    writable: boolean;
    constructor(opts?: TransformOptions);
    _transform(chunk: Buffer, encoding: string, callback: Function): void;
    _transform(chunk: string, encoding: string, callback: Function): void;
    _flush(callback: Function): void;
    read(size?: number): any;
    setEncoding(encoding: string): void;
    pause(): void;
    resume(): void;
    pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
    unpipe<T extends NodeJS.WritableStream>(destination?: T): void;
    unshift(chunk: string): void;
    unshift(chunk: Buffer): void;
    wrap(oldStream: NodeJS.ReadableStream): NodeJS.ReadableStream;
    push(chunk: any, encoding?: string): boolean;
    write(buffer: Buffer, cb?: Function): boolean;
    write(str: string, cb?: Function): boolean;
    write(str: string, encoding?: string, cb?: Function): boolean;
    end(): void;
    end(buffer: Buffer, cb?: Function): void;
    end(str: string, cb?: Function): void;
    end(str: string, encoding?: string, cb?: Function): void;
  }

  export class PassThrough extends Transform { }
}

declare module "util" {
  export interface InspectOptions {
    showHidden?: boolean;
    depth?: number | null;
    colors?: boolean;
    customInspect?: boolean;
  }

  export function format(format: any, ...param: any[]): string;
  export function debug(string: string): void;
  export function error(...param: any[]): void;
  export function puts(...param: any[]): void;
  export function print(...param: any[]): void;
  export function log(string: string): void;
  export function inspect(object: any, showHidden?: boolean, depth?: number | null, color?: boolean): string;
  export function inspect(object: any, options: InspectOptions): string;
  export function isArray(object: any): boolean;
  export function isRegExp(object: any): boolean;
  export function isDate(object: any): boolean;
  export function isError(object: any): boolean;
  export function inherits(constructor: any, superConstructor: any): void;
}

declare module "assert" {
  function internal(value: any, message?: string): void;
  namespace internal {
    export class AssertionError implements Error {
      name: string;
      message: string;
      actual: any;
      expected: any;
      operator: string;
      generatedMessage: boolean;

      constructor(options?: {
        message?: string; actual?: any; expected?: any;
        operator?: string; stackStartFunction?: Function
      });
    }

    export function fail(actual?: any, expected?: any, message?: string, operator?: string): void;
    export function ok(value: any, message?: string): void;
    export function equal(actual: any, expected: any, message?: string): void;
    export function notEqual(actual: any, expected: any, message?: string): void;
    export function deepEqual(actual: any, expected: any, message?: string): void;
    export function notDeepEqual(acutal: any, expected: any, message?: string): void;
    export function strictEqual(actual: any, expected: any, message?: string): void;
    export function notStrictEqual(actual: any, expected: any, message?: string): void;
    export var throws: {
      (block: Function, message?: string): void;
      (block: Function, error: Function, message?: string): void;
      (block: Function, error: RegExp, message?: string): void;
      (block: Function, error: (err: any) => boolean, message?: string): void;
    };

    export var doesNotThrow: {
      (block: Function, message?: string): void;
      (block: Function, error: Function, message?: string): void;
      (block: Function, error: RegExp, message?: string): void;
      (block: Function, error: (err: any) => boolean, message?: string): void;
    };

    export function ifError(value: any): void;
  }

  export = internal;
}

declare module "tty" {
  import net = require("net");

  export function isatty(fd: number): boolean;
  export interface ReadStream extends net.Socket {
    isRaw: boolean;
    setRawMode(mode: boolean): void;
  }
  export interface WriteStream extends net.Socket {
    columns: number;
    rows: number;
  }
}

declare module "domain" {
  import events = require("events");

  export class Domain extends events.EventEmitter {
    run(fn: Function): void;
    add(emitter: events.EventEmitter): void;
    remove(emitter: events.EventEmitter): void;
    bind(cb: (err: Error, data: any) => any): any;
    intercept(cb: (data: any) => any): any;
    dispose(): void;
  }

  export function create(): Domain;
}

declare module "module" {
  export = NodeModule;
}
