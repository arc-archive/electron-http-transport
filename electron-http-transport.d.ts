/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   electron-http-transport.html
 */

declare namespace LogicElements {

  /**
   * `electron-http-transport`
   *
   * A web comonent to work with @advanced-rest-client/electron-request
   * node package in web components environment
   */
  class ElectronHttpTransport extends Polymer.Element {
    connectedCallback(): void;
    disconnectedCallback(): void;
    _abortHandler(e: any): void;
    _onTransportRequested(e: any): void;

    /**
     * Runs the request with Electron's `SocketRequest` class.
     *
     * @param request ARC request object
     * @param opts Additional request options:
     * - timeout {Number} - Timeout in milliseconds
     * - followRedirects {Boolean}
     * Note, as of ARC 13 this object is part of the request object under
     * `config` property.
     * @returns A promise when the request is started with the socket
     * library
     */
    run(request: object|null, opts: object|null): Promise<any>|null;

    /**
     * Reads request timeout settings.
     * If `timeout` is set on `opts` then it returns this timeout.
     * Then it reads global settings for the application and reads
     * `requestDefaultTimeout` property. By default it returns `0`.
     *
     * @param opts Request options
     * @returns Time in milliseconds
     */
    _readTimeout(opts: object|null): Promise<Number|null>;

    /**
     * Reads application hosts configuration and returns it.
     * It returns empty array of hosts couldn't be read.
     */
    _readHosts(): Promise<any[]|null>;
    _prepareRequest(request: any, opts: any): any;
    _makeConnection(connection: any): any;
    _removeConnectionHandlers(connection: any): void;
    _informStatus(type: any, id: any): void;
    _loadStartHandler(id: any): void;
    _firstByteHandler(id: any): void;
    _loadEndHandler(id: any): void;
    _beforeRedirectHandler(id: any, detail: any): void;
    _headersReceivedHandler(id: any, detail: any): void;
    _loadHandler(id: any, response: any, request: any): void;
    _errorHandler(id: any, cause: any, request: any, response: any): void;

    /**
     * Processes response data and creates ARC response object.
     *
     * @param id Request ID
     * @param data Response data
     * @param requestInfo Request data
     */
    _processResponse(id: String|null, data: object|null, requestInfo: object|null): void;

    /**
     * Processes redirects data from the socket library.
     *
     * @param set A set of redirects
     * @returns Map of arrays of timings and redirects information.
     */
    _processRedirects(set: Set|null): object|null;

    /**
     * Computes a request / response loading time from the stats object
     *
     * @param stats A stats property of the socket client response.
     * @returns A time to full response in miliseconds. 0 if stats unavailable.
     */
    _computeLoadingTime(stats: Objject|null): Number|null;

    /**
     * Creates HAR 1.2 object from timing data
     */
    _cleanTimings(stats: object|null): object|null;

    /**
     * Dispatches `response-ready` event with request data.
     * If the event is not caneled then it dispatches `report-response`
     * event.
     *
     * @param detail The request detail
     */
    _beforeResponse(detail: object|null): void;

    /**
     * Fires the `report-response` custom event with immutable response data.
     *
     * @param detail The event detail object.
     */
    _reportResponse(detail: object|null): void;

    /**
     * Creates an immutable `detail` object for the `report-response` custom
     * event.
     *
     * @returns Immutable object.
     */
    _prepareTransportObject(detail: object|null): object|null;

    /**
     * Updates a rule from the `host-rules-changed` custom event.
     * The event should contain `rule` property on the event's detail object
     * containing the rule object.
     */
    _ruleUpdated(e: CustomEvent|null): void;

    /**
     * Deletes the rule from the `host-rules-deleted` custom event.
     * The event should contain `rule` property on the event's detail object
     * containing the rule object.
     */
    _ruleDeleted(e: CustomEvent|null): void;
  }
}

interface HTMLElementTagNameMap {
  "electron-http-transport": LogicElements.ElectronHttpTransport;
}
