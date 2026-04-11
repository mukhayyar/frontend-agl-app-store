import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class AppIdRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): AppIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AppIdRequest): AppIdRequest.AsObject;
  static serializeBinaryToWriter(message: AppIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppIdRequest;
  static deserializeBinaryFromReader(message: AppIdRequest, reader: jspb.BinaryReader): AppIdRequest;
}

export namespace AppIdRequest {
  export type AsObject = {
    appId: string,
  }
}

export class PaginationRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): PaginationRequest;

  getPageSize(): number;
  setPageSize(value: number): PaginationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PaginationRequest): PaginationRequest.AsObject;
  static serializeBinaryToWriter(message: PaginationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginationRequest;
  static deserializeBinaryFromReader(message: PaginationRequest, reader: jspb.BinaryReader): PaginationRequest;
}

export namespace PaginationRequest {
  export type AsObject = {
    page: number,
    pageSize: number,
  }
}

export class PaginationResponse extends jspb.Message {
  getPage(): number;
  setPage(value: number): PaginationResponse;

  getPageSize(): number;
  setPageSize(value: number): PaginationResponse;

  getTotal(): number;
  setTotal(value: number): PaginationResponse;

  getTotalPages(): number;
  setTotalPages(value: number): PaginationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaginationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PaginationResponse): PaginationResponse.AsObject;
  static serializeBinaryToWriter(message: PaginationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaginationResponse;
  static deserializeBinaryFromReader(message: PaginationResponse, reader: jspb.BinaryReader): PaginationResponse;
}

export namespace PaginationResponse {
  export type AsObject = {
    page: number,
    pageSize: number,
    total: number,
    totalPages: number,
  }
}

export class EolRebaseResponse extends jspb.Message {
  getRebaseInfoMap(): jspb.Map<string, StringList>;
  clearRebaseInfoMap(): EolRebaseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EolRebaseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EolRebaseResponse): EolRebaseResponse.AsObject;
  static serializeBinaryToWriter(message: EolRebaseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EolRebaseResponse;
  static deserializeBinaryFromReader(message: EolRebaseResponse, reader: jspb.BinaryReader): EolRebaseResponse;
}

export namespace EolRebaseResponse {
  export type AsObject = {
    rebaseInfoMap: Array<[string, StringList.AsObject]>,
  }
}

export class StringList extends jspb.Message {
  getItemsList(): Array<string>;
  setItemsList(value: Array<string>): StringList;
  clearItemsList(): StringList;
  addItems(value: string, index?: number): StringList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringList.AsObject;
  static toObject(includeInstance: boolean, msg: StringList): StringList.AsObject;
  static serializeBinaryToWriter(message: StringList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringList;
  static deserializeBinaryFromReader(message: StringList, reader: jspb.BinaryReader): StringList;
}

export namespace StringList {
  export type AsObject = {
    itemsList: Array<string>,
  }
}

export class GetEolRebaseAppIdRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): GetEolRebaseAppIdRequest;

  getBranch(): string;
  setBranch(value: string): GetEolRebaseAppIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEolRebaseAppIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEolRebaseAppIdRequest): GetEolRebaseAppIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetEolRebaseAppIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEolRebaseAppIdRequest;
  static deserializeBinaryFromReader(message: GetEolRebaseAppIdRequest, reader: jspb.BinaryReader): GetEolRebaseAppIdRequest;
}

export namespace GetEolRebaseAppIdRequest {
  export type AsObject = {
    appId: string,
    branch: string,
  }
}

export class EolRebaseAppIdResponse extends jspb.Message {
  getRebaseInfo(): string;
  setRebaseInfo(value: string): EolRebaseAppIdResponse;

  getNotFound(): google_protobuf_empty_pb.Empty | undefined;
  setNotFound(value?: google_protobuf_empty_pb.Empty): EolRebaseAppIdResponse;
  hasNotFound(): boolean;
  clearNotFound(): EolRebaseAppIdResponse;

  getResponseCase(): EolRebaseAppIdResponse.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EolRebaseAppIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EolRebaseAppIdResponse): EolRebaseAppIdResponse.AsObject;
  static serializeBinaryToWriter(message: EolRebaseAppIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EolRebaseAppIdResponse;
  static deserializeBinaryFromReader(message: EolRebaseAppIdResponse, reader: jspb.BinaryReader): EolRebaseAppIdResponse;
}

export namespace EolRebaseAppIdResponse {
  export type AsObject = {
    rebaseInfo: string,
    notFound?: google_protobuf_empty_pb.Empty.AsObject,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    REBASE_INFO = 1,
    NOT_FOUND = 2,
  }
}

export class EolMessageResponse extends jspb.Message {
  getMessagesMap(): jspb.Map<string, string>;
  clearMessagesMap(): EolMessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EolMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EolMessageResponse): EolMessageResponse.AsObject;
  static serializeBinaryToWriter(message: EolMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EolMessageResponse;
  static deserializeBinaryFromReader(message: EolMessageResponse, reader: jspb.BinaryReader): EolMessageResponse;
}

export namespace EolMessageResponse {
  export type AsObject = {
    messagesMap: Array<[string, string]>,
  }
}

export class GetEolMessageAppIdRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): GetEolMessageAppIdRequest;

  getBranch(): string;
  setBranch(value: string): GetEolMessageAppIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEolMessageAppIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEolMessageAppIdRequest): GetEolMessageAppIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetEolMessageAppIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEolMessageAppIdRequest;
  static deserializeBinaryFromReader(message: GetEolMessageAppIdRequest, reader: jspb.BinaryReader): GetEolMessageAppIdRequest;
}

export namespace GetEolMessageAppIdRequest {
  export type AsObject = {
    appId: string,
    branch: string,
  }
}

export class EolMessageAppIdResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): EolMessageAppIdResponse;

  getNotFound(): google_protobuf_empty_pb.Empty | undefined;
  setNotFound(value?: google_protobuf_empty_pb.Empty): EolMessageAppIdResponse;
  hasNotFound(): boolean;
  clearNotFound(): EolMessageAppIdResponse;

  getResponseCase(): EolMessageAppIdResponse.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EolMessageAppIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EolMessageAppIdResponse): EolMessageAppIdResponse.AsObject;
  static serializeBinaryToWriter(message: EolMessageAppIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EolMessageAppIdResponse;
  static deserializeBinaryFromReader(message: EolMessageAppIdResponse, reader: jspb.BinaryReader): EolMessageAppIdResponse;
}

export namespace EolMessageAppIdResponse {
  export type AsObject = {
    message: string,
    notFound?: google_protobuf_empty_pb.Empty.AsObject,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    MESSAGE = 1,
    NOT_FOUND = 2,
  }
}

export class ListAppstreamRequest extends jspb.Message {
  getFilter(): string;
  setFilter(value: string): ListAppstreamRequest;

  getSort(): string;
  setSort(value: string): ListAppstreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAppstreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAppstreamRequest): ListAppstreamRequest.AsObject;
  static serializeBinaryToWriter(message: ListAppstreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAppstreamRequest;
  static deserializeBinaryFromReader(message: ListAppstreamRequest, reader: jspb.BinaryReader): ListAppstreamRequest;
}

export namespace ListAppstreamRequest {
  export type AsObject = {
    filter: string,
    sort: string,
  }
}

export class ListAppstreamResponse extends jspb.Message {
  getAppIdsList(): Array<string>;
  setAppIdsList(value: Array<string>): ListAppstreamResponse;
  clearAppIdsList(): ListAppstreamResponse;
  addAppIds(value: string, index?: number): ListAppstreamResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAppstreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAppstreamResponse): ListAppstreamResponse.AsObject;
  static serializeBinaryToWriter(message: ListAppstreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAppstreamResponse;
  static deserializeBinaryFromReader(message: ListAppstreamResponse, reader: jspb.BinaryReader): ListAppstreamResponse;
}

export namespace ListAppstreamResponse {
  export type AsObject = {
    appIdsList: Array<string>,
  }
}

export class GetAppstreamRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): GetAppstreamRequest;

  getLocale(): string;
  setLocale(value: string): GetAppstreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAppstreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAppstreamRequest): GetAppstreamRequest.AsObject;
  static serializeBinaryToWriter(message: GetAppstreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAppstreamRequest;
  static deserializeBinaryFromReader(message: GetAppstreamRequest, reader: jspb.BinaryReader): GetAppstreamRequest;
}

export namespace GetAppstreamRequest {
  export type AsObject = {
    appId: string,
    locale: string,
  }
}

export class GetAppstreamResponse extends jspb.Message {
  getDesktop(): DesktopAppstream | undefined;
  setDesktop(value?: DesktopAppstream): GetAppstreamResponse;
  hasDesktop(): boolean;
  clearDesktop(): GetAppstreamResponse;

  getAddon(): AddonAppstream | undefined;
  setAddon(value?: AddonAppstream): GetAppstreamResponse;
  hasAddon(): boolean;
  clearAddon(): GetAppstreamResponse;

  getLocalization(): LocalizationAppstream | undefined;
  setLocalization(value?: LocalizationAppstream): GetAppstreamResponse;
  hasLocalization(): boolean;
  clearLocalization(): GetAppstreamResponse;

  getGeneric(): GenericAppstream | undefined;
  setGeneric(value?: GenericAppstream): GetAppstreamResponse;
  hasGeneric(): boolean;
  clearGeneric(): GetAppstreamResponse;

  getRuntime(): RuntimeAppstream | undefined;
  setRuntime(value?: RuntimeAppstream): GetAppstreamResponse;
  hasRuntime(): boolean;
  clearRuntime(): GetAppstreamResponse;

  getAppstreamCase(): GetAppstreamResponse.AppstreamCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAppstreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAppstreamResponse): GetAppstreamResponse.AsObject;
  static serializeBinaryToWriter(message: GetAppstreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAppstreamResponse;
  static deserializeBinaryFromReader(message: GetAppstreamResponse, reader: jspb.BinaryReader): GetAppstreamResponse;
}

export namespace GetAppstreamResponse {
  export type AsObject = {
    desktop?: DesktopAppstream.AsObject,
    addon?: AddonAppstream.AsObject,
    localization?: LocalizationAppstream.AsObject,
    generic?: GenericAppstream.AsObject,
    runtime?: RuntimeAppstream.AsObject,
  }

  export enum AppstreamCase { 
    APPSTREAM_NOT_SET = 0,
    DESKTOP = 1,
    ADDON = 2,
    LOCALIZATION = 3,
    GENERIC = 4,
    RUNTIME = 5,
  }
}

export class GetIsFullscreenAppRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): GetIsFullscreenAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIsFullscreenAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIsFullscreenAppRequest): GetIsFullscreenAppRequest.AsObject;
  static serializeBinaryToWriter(message: GetIsFullscreenAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIsFullscreenAppRequest;
  static deserializeBinaryFromReader(message: GetIsFullscreenAppRequest, reader: jspb.BinaryReader): GetIsFullscreenAppRequest;
}

export namespace GetIsFullscreenAppRequest {
  export type AsObject = {
    appId: string,
  }
}

export class GetIsFullscreenAppResponse extends jspb.Message {
  getIsFullscreen(): boolean;
  setIsFullscreen(value: boolean): GetIsFullscreenAppResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIsFullscreenAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetIsFullscreenAppResponse): GetIsFullscreenAppResponse.AsObject;
  static serializeBinaryToWriter(message: GetIsFullscreenAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIsFullscreenAppResponse;
  static deserializeBinaryFromReader(message: GetIsFullscreenAppResponse, reader: jspb.BinaryReader): GetIsFullscreenAppResponse;
}

export namespace GetIsFullscreenAppResponse {
  export type AsObject = {
    isFullscreen: boolean,
  }
}

export class SearchAppsRequest extends jspb.Message {
  getLocale(): string;
  setLocale(value: string): SearchAppsRequest;

  getQuery(): SearchQuery | undefined;
  setQuery(value?: SearchQuery): SearchAppsRequest;
  hasQuery(): boolean;
  clearQuery(): SearchAppsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchAppsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchAppsRequest): SearchAppsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchAppsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchAppsRequest;
  static deserializeBinaryFromReader(message: SearchAppsRequest, reader: jspb.BinaryReader): SearchAppsRequest;
}

export namespace SearchAppsRequest {
  export type AsObject = {
    locale: string,
    query?: SearchQuery.AsObject,
  }
}

export class FacetCount extends jspb.Message {
  getValuesMap(): jspb.Map<string, number>;
  clearValuesMap(): FacetCount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FacetCount.AsObject;
  static toObject(includeInstance: boolean, msg: FacetCount): FacetCount.AsObject;
  static serializeBinaryToWriter(message: FacetCount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FacetCount;
  static deserializeBinaryFromReader(message: FacetCount, reader: jspb.BinaryReader): FacetCount;
}

export namespace FacetCount {
  export type AsObject = {
    valuesMap: Array<[string, number]>,
  }
}

export class SearchAppsResponse extends jspb.Message {
  getHitsList(): Array<AppsIndex>;
  setHitsList(value: Array<AppsIndex>): SearchAppsResponse;
  clearHitsList(): SearchAppsResponse;
  addHits(value?: AppsIndex, index?: number): AppsIndex;

  getQuery(): string;
  setQuery(value: string): SearchAppsResponse;

  getProcessingTimeMs(): number;
  setProcessingTimeMs(value: number): SearchAppsResponse;

  getHitsPerPage(): number;
  setHitsPerPage(value: number): SearchAppsResponse;

  getPage(): number;
  setPage(value: number): SearchAppsResponse;

  getTotalPages(): number;
  setTotalPages(value: number): SearchAppsResponse;

  getTotalHits(): number;
  setTotalHits(value: number): SearchAppsResponse;

  getFacetDistributionMap(): jspb.Map<string, FacetCount>;
  clearFacetDistributionMap(): SearchAppsResponse;

  getFacetStatsMap(): jspb.Map<string, FacetCount>;
  clearFacetStatsMap(): SearchAppsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchAppsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchAppsResponse): SearchAppsResponse.AsObject;
  static serializeBinaryToWriter(message: SearchAppsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchAppsResponse;
  static deserializeBinaryFromReader(message: SearchAppsResponse, reader: jspb.BinaryReader): SearchAppsResponse;
}

export namespace SearchAppsResponse {
  export type AsObject = {
    hitsList: Array<AppsIndex.AsObject>,
    query: string,
    processingTimeMs: number,
    hitsPerPage: number,
    page: number,
    totalPages: number,
    totalHits: number,
    facetDistributionMap: Array<[string, FacetCount.AsObject]>,
    facetStatsMap: Array<[string, FacetCount.AsObject]>,
  }
}

export class SearchQuery extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): SearchQuery;

  getFiltersList(): Array<Filter>;
  setFiltersList(value: Array<Filter>): SearchQuery;
  clearFiltersList(): SearchQuery;
  addFilters(value?: Filter, index?: number): Filter;

  getHitsPerPage(): number;
  setHitsPerPage(value: number): SearchQuery;

  getPage(): number;
  setPage(value: number): SearchQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchQuery.AsObject;
  static toObject(includeInstance: boolean, msg: SearchQuery): SearchQuery.AsObject;
  static serializeBinaryToWriter(message: SearchQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchQuery;
  static deserializeBinaryFromReader(message: SearchQuery, reader: jspb.BinaryReader): SearchQuery;
}

export namespace SearchQuery {
  export type AsObject = {
    query: string,
    filtersList: Array<Filter.AsObject>,
    hitsPerPage: number,
    page: number,
  }
}

export class Filter extends jspb.Message {
  getFilterType(): string;
  setFilterType(value: string): Filter;

  getValue(): string;
  setValue(value: string): Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
  static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filter;
  static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
  export type AsObject = {
    filterType: string,
    value: string,
  }
}

export class RuntimeListResponse extends jspb.Message {
  getRuntimesMap(): jspb.Map<string, number>;
  clearRuntimesMap(): RuntimeListResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RuntimeListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RuntimeListResponse): RuntimeListResponse.AsObject;
  static serializeBinaryToWriter(message: RuntimeListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RuntimeListResponse;
  static deserializeBinaryFromReader(message: RuntimeListResponse, reader: jspb.BinaryReader): RuntimeListResponse;
}

export namespace RuntimeListResponse {
  export type AsObject = {
    runtimesMap: Array<[string, number]>,
  }
}

export class GetSummaryRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): GetSummaryRequest;

  getBranch(): string;
  setBranch(value: string): GetSummaryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSummaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSummaryRequest): GetSummaryRequest.AsObject;
  static serializeBinaryToWriter(message: GetSummaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSummaryRequest;
  static deserializeBinaryFromReader(message: GetSummaryRequest, reader: jspb.BinaryReader): GetSummaryRequest;
}

export namespace GetSummaryRequest {
  export type AsObject = {
    appId: string,
    branch: string,
  }
}

export class SummaryResponse extends jspb.Message {
  getArchesList(): Array<string>;
  setArchesList(value: Array<string>): SummaryResponse;
  clearArchesList(): SummaryResponse;
  addArches(value: string, index?: number): SummaryResponse;

  getBranch(): string;
  setBranch(value: string): SummaryResponse;

  getTimestamp(): number;
  setTimestamp(value: number): SummaryResponse;

  getDownloadSize(): number;
  setDownloadSize(value: number): SummaryResponse;

  getInstalledSize(): number;
  setInstalledSize(value: number): SummaryResponse;

  getMetadata(): SummaryMetadata | undefined;
  setMetadata(value?: SummaryMetadata): SummaryResponse;
  hasMetadata(): boolean;
  clearMetadata(): SummaryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SummaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SummaryResponse): SummaryResponse.AsObject;
  static serializeBinaryToWriter(message: SummaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SummaryResponse;
  static deserializeBinaryFromReader(message: SummaryResponse, reader: jspb.BinaryReader): SummaryResponse;
}

export namespace SummaryResponse {
  export type AsObject = {
    archesList: Array<string>,
    branch: string,
    timestamp: number,
    downloadSize: number,
    installedSize: number,
    metadata?: SummaryMetadata.AsObject,
  }
}

export class PlatformsResponse extends jspb.Message {
  getPlatformsMap(): jspb.Map<string, Platform>;
  clearPlatformsMap(): PlatformsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlatformsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlatformsResponse): PlatformsResponse.AsObject;
  static serializeBinaryToWriter(message: PlatformsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlatformsResponse;
  static deserializeBinaryFromReader(message: PlatformsResponse, reader: jspb.BinaryReader): PlatformsResponse;
}

export namespace PlatformsResponse {
  export type AsObject = {
    platformsMap: Array<[string, Platform.AsObject]>,
  }
}

export class GetAddonsRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): GetAddonsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAddonsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAddonsRequest): GetAddonsRequest.AsObject;
  static serializeBinaryToWriter(message: GetAddonsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAddonsRequest;
  static deserializeBinaryFromReader(message: GetAddonsRequest, reader: jspb.BinaryReader): GetAddonsRequest;
}

export namespace GetAddonsRequest {
  export type AsObject = {
    appId: string,
  }
}

export class GetAddonsResponse extends jspb.Message {
  getAddonsList(): Array<string>;
  setAddonsList(value: Array<string>): GetAddonsResponse;
  clearAddonsList(): GetAddonsResponse;
  addAddons(value: string, index?: number): GetAddonsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAddonsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAddonsResponse): GetAddonsResponse.AsObject;
  static serializeBinaryToWriter(message: GetAddonsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAddonsResponse;
  static deserializeBinaryFromReader(message: GetAddonsResponse, reader: jspb.BinaryReader): GetAddonsResponse;
}

export namespace GetAddonsResponse {
  export type AsObject = {
    addonsList: Array<string>,
  }
}

export class DesktopAppstream extends jspb.Message {
  getType(): string;
  setType(value: string): DesktopAppstream;

  getId(): string;
  setId(value: string): DesktopAppstream;

  getName(): string;
  setName(value: string): DesktopAppstream;

  getSummary(): string;
  setSummary(value: string): DesktopAppstream;

  getDescription(): string;
  setDescription(value: string): DesktopAppstream;

  getDeveloperName(): string;
  setDeveloperName(value: string): DesktopAppstream;

  getIcon(): string;
  setIcon(value: string): DesktopAppstream;

  getIconsList(): Array<Icon>;
  setIconsList(value: Array<Icon>): DesktopAppstream;
  clearIconsList(): DesktopAppstream;
  addIcons(value?: Icon, index?: number): Icon;

  getScreenshotsList(): Array<Screenshot>;
  setScreenshotsList(value: Array<Screenshot>): DesktopAppstream;
  clearScreenshotsList(): DesktopAppstream;
  addScreenshots(value?: Screenshot, index?: number): Screenshot;

  getReleasesList(): Array<Release>;
  setReleasesList(value: Array<Release>): DesktopAppstream;
  clearReleasesList(): DesktopAppstream;
  addReleases(value?: Release, index?: number): Release;

  getContentRating(): ContentRating | undefined;
  setContentRating(value?: ContentRating): DesktopAppstream;
  hasContentRating(): boolean;
  clearContentRating(): DesktopAppstream;

  getUrls(): Urls | undefined;
  setUrls(value?: Urls): DesktopAppstream;
  hasUrls(): boolean;
  clearUrls(): DesktopAppstream;

  getCategoriesList(): Array<string>;
  setCategoriesList(value: Array<string>): DesktopAppstream;
  clearCategoriesList(): DesktopAppstream;
  addCategories(value: string, index?: number): DesktopAppstream;

  getKudosList(): Array<string>;
  setKudosList(value: Array<string>): DesktopAppstream;
  clearKudosList(): DesktopAppstream;
  addKudos(value: string, index?: number): DesktopAppstream;

  getKeywordsList(): Array<string>;
  setKeywordsList(value: Array<string>): DesktopAppstream;
  clearKeywordsList(): DesktopAppstream;
  addKeywords(value: string, index?: number): DesktopAppstream;

  getMimetypesList(): Array<string>;
  setMimetypesList(value: Array<string>): DesktopAppstream;
  clearMimetypesList(): DesktopAppstream;
  addMimetypes(value: string, index?: number): DesktopAppstream;

  getProjectLicense(): string;
  setProjectLicense(value: string): DesktopAppstream;

  getProvidesList(): Array<Provides>;
  setProvidesList(value: Array<Provides>): DesktopAppstream;
  clearProvidesList(): DesktopAppstream;
  addProvides(value?: Provides, index?: number): Provides;

  getLaunchable(): Launchable | undefined;
  setLaunchable(value?: Launchable): DesktopAppstream;
  hasLaunchable(): boolean;
  clearLaunchable(): DesktopAppstream;

  getBundle(): Bundle | undefined;
  setBundle(value?: Bundle): DesktopAppstream;
  hasBundle(): boolean;
  clearBundle(): DesktopAppstream;

  getTranslation(): Translation | undefined;
  setTranslation(value?: Translation): DesktopAppstream;
  hasTranslation(): boolean;
  clearTranslation(): DesktopAppstream;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): DesktopAppstream;
  hasMetadata(): boolean;
  clearMetadata(): DesktopAppstream;

  getIsFreeLicense(): boolean;
  setIsFreeLicense(value: boolean): DesktopAppstream;

  getIsMobileFriendly(): boolean;
  setIsMobileFriendly(value: boolean): DesktopAppstream;

  getBrandingList(): Array<Branding>;
  setBrandingList(value: Array<Branding>): DesktopAppstream;
  clearBrandingList(): DesktopAppstream;
  addBranding(value?: Branding, index?: number): Branding;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DesktopAppstream.AsObject;
  static toObject(includeInstance: boolean, msg: DesktopAppstream): DesktopAppstream.AsObject;
  static serializeBinaryToWriter(message: DesktopAppstream, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DesktopAppstream;
  static deserializeBinaryFromReader(message: DesktopAppstream, reader: jspb.BinaryReader): DesktopAppstream;
}

export namespace DesktopAppstream {
  export type AsObject = {
    type: string,
    id: string,
    name: string,
    summary: string,
    description: string,
    developerName: string,
    icon: string,
    iconsList: Array<Icon.AsObject>,
    screenshotsList: Array<Screenshot.AsObject>,
    releasesList: Array<Release.AsObject>,
    contentRating?: ContentRating.AsObject,
    urls?: Urls.AsObject,
    categoriesList: Array<string>,
    kudosList: Array<string>,
    keywordsList: Array<string>,
    mimetypesList: Array<string>,
    projectLicense: string,
    providesList: Array<Provides.AsObject>,
    launchable?: Launchable.AsObject,
    bundle?: Bundle.AsObject,
    translation?: Translation.AsObject,
    metadata?: Metadata.AsObject,
    isFreeLicense: boolean,
    isMobileFriendly: boolean,
    brandingList: Array<Branding.AsObject>,
  }
}

export class AppsIndex extends jspb.Message {
  getName(): string;
  setName(value: string): AppsIndex;

  getKeywordsList(): Array<string>;
  setKeywordsList(value: Array<string>): AppsIndex;
  clearKeywordsList(): AppsIndex;
  addKeywords(value: string, index?: number): AppsIndex;

  getSummary(): string;
  setSummary(value: string): AppsIndex;

  getDescription(): string;
  setDescription(value: string): AppsIndex;

  getId(): string;
  setId(value: string): AppsIndex;

  getType(): string;
  setType(value: string): AppsIndex;

  getTranslationsMap(): jspb.Map<string, MapString>;
  clearTranslationsMap(): AppsIndex;

  getProjectLicense(): string;
  setProjectLicense(value: string): AppsIndex;

  getIsFreeLicense(): boolean;
  setIsFreeLicense(value: boolean): AppsIndex;

  getAppId(): string;
  setAppId(value: string): AppsIndex;

  getIcon(): string;
  setIcon(value: string): AppsIndex;

  getMainCategoriesList(): Array<string>;
  setMainCategoriesList(value: Array<string>): AppsIndex;
  clearMainCategoriesList(): AppsIndex;
  addMainCategories(value: string, index?: number): AppsIndex;

  getSubCategoriesList(): Array<string>;
  setSubCategoriesList(value: Array<string>): AppsIndex;
  clearSubCategoriesList(): AppsIndex;
  addSubCategories(value: string, index?: number): AppsIndex;

  getDeveloperName(): string;
  setDeveloperName(value: string): AppsIndex;

  getVerificationVerified(): boolean;
  setVerificationVerified(value: boolean): AppsIndex;

  getVerificationMethod(): string;
  setVerificationMethod(value: string): AppsIndex;

  getVerificationLoginName(): string;
  setVerificationLoginName(value: string): AppsIndex;

  getVerificationLoginProvider(): string;
  setVerificationLoginProvider(value: string): AppsIndex;

  getVerificationLoginIsOrganization(): boolean;
  setVerificationLoginIsOrganization(value: boolean): AppsIndex;

  getVerificationWebsite(): string;
  setVerificationWebsite(value: string): AppsIndex;

  getVerificationTimestamp(): string;
  setVerificationTimestamp(value: string): AppsIndex;

  getRuntime(): string;
  setRuntime(value: string): AppsIndex;

  getUpdatedAt(): number;
  setUpdatedAt(value: number): AppsIndex;

  getArchesList(): Array<string>;
  setArchesList(value: Array<string>): AppsIndex;
  clearArchesList(): AppsIndex;
  addArches(value: string, index?: number): AppsIndex;

  getAddedAt(): number;
  setAddedAt(value: number): AppsIndex;

  getTrending(): number;
  setTrending(value: number): AppsIndex;

  getInstallsLastMonth(): number;
  setInstallsLastMonth(value: number): AppsIndex;

  getFavoritesCount(): number;
  setFavoritesCount(value: number): AppsIndex;

  getIsMobileFriendly(): boolean;
  setIsMobileFriendly(value: boolean): AppsIndex;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppsIndex.AsObject;
  static toObject(includeInstance: boolean, msg: AppsIndex): AppsIndex.AsObject;
  static serializeBinaryToWriter(message: AppsIndex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppsIndex;
  static deserializeBinaryFromReader(message: AppsIndex, reader: jspb.BinaryReader): AppsIndex;
}

export namespace AppsIndex {
  export type AsObject = {
    name: string,
    keywordsList: Array<string>,
    summary: string,
    description: string,
    id: string,
    type: string,
    translationsMap: Array<[string, MapString.AsObject]>,
    projectLicense: string,
    isFreeLicense: boolean,
    appId: string,
    icon: string,
    mainCategoriesList: Array<string>,
    subCategoriesList: Array<string>,
    developerName: string,
    verificationVerified: boolean,
    verificationMethod: string,
    verificationLoginName: string,
    verificationLoginProvider: string,
    verificationLoginIsOrganization: boolean,
    verificationWebsite: string,
    verificationTimestamp: string,
    runtime: string,
    updatedAt: number,
    archesList: Array<string>,
    addedAt: number,
    trending: number,
    installsLastMonth: number,
    favoritesCount: number,
    isMobileFriendly: boolean,
  }
}

export class MapString extends jspb.Message {
  getValuesMap(): jspb.Map<string, StringOrArray>;
  clearValuesMap(): MapString;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapString.AsObject;
  static toObject(includeInstance: boolean, msg: MapString): MapString.AsObject;
  static serializeBinaryToWriter(message: MapString, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapString;
  static deserializeBinaryFromReader(message: MapString, reader: jspb.BinaryReader): MapString;
}

export namespace MapString {
  export type AsObject = {
    valuesMap: Array<[string, StringOrArray.AsObject]>,
  }
}

export class StringOrArray extends jspb.Message {
  getStringValue(): string;
  setStringValue(value: string): StringOrArray;

  getArrayValue(): StringArray | undefined;
  setArrayValue(value?: StringArray): StringOrArray;
  hasArrayValue(): boolean;
  clearArrayValue(): StringOrArray;

  getValueCase(): StringOrArray.ValueCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringOrArray.AsObject;
  static toObject(includeInstance: boolean, msg: StringOrArray): StringOrArray.AsObject;
  static serializeBinaryToWriter(message: StringOrArray, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringOrArray;
  static deserializeBinaryFromReader(message: StringOrArray, reader: jspb.BinaryReader): StringOrArray;
}

export namespace StringOrArray {
  export type AsObject = {
    stringValue: string,
    arrayValue?: StringArray.AsObject,
  }

  export enum ValueCase { 
    VALUE_NOT_SET = 0,
    STRING_VALUE = 1,
    ARRAY_VALUE = 2,
  }
}

export class StringArray extends jspb.Message {
  getItemsList(): Array<string>;
  setItemsList(value: Array<string>): StringArray;
  clearItemsList(): StringArray;
  addItems(value: string, index?: number): StringArray;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringArray.AsObject;
  static toObject(includeInstance: boolean, msg: StringArray): StringArray.AsObject;
  static serializeBinaryToWriter(message: StringArray, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringArray;
  static deserializeBinaryFromReader(message: StringArray, reader: jspb.BinaryReader): StringArray;
}

export namespace StringArray {
  export type AsObject = {
    itemsList: Array<string>,
  }
}

export class LoginMethodsResponse extends jspb.Message {
  getMethodsList(): Array<LoginMethod>;
  setMethodsList(value: Array<LoginMethod>): LoginMethodsResponse;
  clearMethodsList(): LoginMethodsResponse;
  addMethods(value?: LoginMethod, index?: number): LoginMethod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginMethodsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginMethodsResponse): LoginMethodsResponse.AsObject;
  static serializeBinaryToWriter(message: LoginMethodsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginMethodsResponse;
  static deserializeBinaryFromReader(message: LoginMethodsResponse, reader: jspb.BinaryReader): LoginMethodsResponse;
}

export namespace LoginMethodsResponse {
  export type AsObject = {
    methodsList: Array<LoginMethod.AsObject>,
  }
}

export class LoginMethod extends jspb.Message {
  getMethod(): string;
  setMethod(value: string): LoginMethod;

  getName(): string;
  setName(value: string): LoginMethod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginMethod.AsObject;
  static toObject(includeInstance: boolean, msg: LoginMethod): LoginMethod.AsObject;
  static serializeBinaryToWriter(message: LoginMethod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginMethod;
  static deserializeBinaryFromReader(message: LoginMethod, reader: jspb.BinaryReader): LoginMethod;
}

export namespace LoginMethod {
  export type AsObject = {
    method: string,
    name: string,
  }
}

export class StartOAuthFlowResponse extends jspb.Message {
  getRedirectUrl(): string;
  setRedirectUrl(value: string): StartOAuthFlowResponse;

  getState(): string;
  setState(value: string): StartOAuthFlowResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartOAuthFlowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartOAuthFlowResponse): StartOAuthFlowResponse.AsObject;
  static serializeBinaryToWriter(message: StartOAuthFlowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartOAuthFlowResponse;
  static deserializeBinaryFromReader(message: StartOAuthFlowResponse, reader: jspb.BinaryReader): StartOAuthFlowResponse;
}

export namespace StartOAuthFlowResponse {
  export type AsObject = {
    redirectUrl: string,
    state: string,
  }
}

export class ContinueOAuthFlowRequest extends jspb.Message {
  getSuccess(): OAuthLoginResponseSuccess | undefined;
  setSuccess(value?: OAuthLoginResponseSuccess): ContinueOAuthFlowRequest;
  hasSuccess(): boolean;
  clearSuccess(): ContinueOAuthFlowRequest;

  getFailure(): OAuthLoginResponseFailure | undefined;
  setFailure(value?: OAuthLoginResponseFailure): ContinueOAuthFlowRequest;
  hasFailure(): boolean;
  clearFailure(): ContinueOAuthFlowRequest;

  getResponseCase(): ContinueOAuthFlowRequest.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContinueOAuthFlowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ContinueOAuthFlowRequest): ContinueOAuthFlowRequest.AsObject;
  static serializeBinaryToWriter(message: ContinueOAuthFlowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContinueOAuthFlowRequest;
  static deserializeBinaryFromReader(message: ContinueOAuthFlowRequest, reader: jspb.BinaryReader): ContinueOAuthFlowRequest;
}

export namespace ContinueOAuthFlowRequest {
  export type AsObject = {
    success?: OAuthLoginResponseSuccess.AsObject,
    failure?: OAuthLoginResponseFailure.AsObject,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    SUCCESS = 1,
    FAILURE = 2,
  }
}

export class ContinueOAuthFlowResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ContinueOAuthFlowResponse;

  getError(): string;
  setError(value: string): ContinueOAuthFlowResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContinueOAuthFlowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ContinueOAuthFlowResponse): ContinueOAuthFlowResponse.AsObject;
  static serializeBinaryToWriter(message: ContinueOAuthFlowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContinueOAuthFlowResponse;
  static deserializeBinaryFromReader(message: ContinueOAuthFlowResponse, reader: jspb.BinaryReader): ContinueOAuthFlowResponse;
}

export namespace ContinueOAuthFlowResponse {
  export type AsObject = {
    success: boolean,
    error: string,
  }
}

export class OAuthLoginResponseSuccess extends jspb.Message {
  getCode(): string;
  setCode(value: string): OAuthLoginResponseSuccess;

  getState(): string;
  setState(value: string): OAuthLoginResponseSuccess;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthLoginResponseSuccess.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthLoginResponseSuccess): OAuthLoginResponseSuccess.AsObject;
  static serializeBinaryToWriter(message: OAuthLoginResponseSuccess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthLoginResponseSuccess;
  static deserializeBinaryFromReader(message: OAuthLoginResponseSuccess, reader: jspb.BinaryReader): OAuthLoginResponseSuccess;
}

export namespace OAuthLoginResponseSuccess {
  export type AsObject = {
    code: string,
    state: string,
  }
}

export class OAuthLoginResponseFailure extends jspb.Message {
  getState(): string;
  setState(value: string): OAuthLoginResponseFailure;

  getError(): string;
  setError(value: string): OAuthLoginResponseFailure;

  getErrorDescription(): string;
  setErrorDescription(value: string): OAuthLoginResponseFailure;

  getErrorUri(): string;
  setErrorUri(value: string): OAuthLoginResponseFailure;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OAuthLoginResponseFailure.AsObject;
  static toObject(includeInstance: boolean, msg: OAuthLoginResponseFailure): OAuthLoginResponseFailure.AsObject;
  static serializeBinaryToWriter(message: OAuthLoginResponseFailure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OAuthLoginResponseFailure;
  static deserializeBinaryFromReader(message: OAuthLoginResponseFailure, reader: jspb.BinaryReader): OAuthLoginResponseFailure;
}

export namespace OAuthLoginResponseFailure {
  export type AsObject = {
    state: string,
    error: string,
    errorDescription: string,
    errorUri: string,
  }
}

export class UserInfoResponse extends jspb.Message {
  getUserInfo(): UserInfo | undefined;
  setUserInfo(value?: UserInfo): UserInfoResponse;
  hasUserInfo(): boolean;
  clearUserInfo(): UserInfoResponse;

  getNotLoggedIn(): google_protobuf_empty_pb.Empty | undefined;
  setNotLoggedIn(value?: google_protobuf_empty_pb.Empty): UserInfoResponse;
  hasNotLoggedIn(): boolean;
  clearNotLoggedIn(): UserInfoResponse;

  getResponseCase(): UserInfoResponse.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserInfoResponse): UserInfoResponse.AsObject;
  static serializeBinaryToWriter(message: UserInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInfoResponse;
  static deserializeBinaryFromReader(message: UserInfoResponse, reader: jspb.BinaryReader): UserInfoResponse;
}

export namespace UserInfoResponse {
  export type AsObject = {
    userInfo?: UserInfo.AsObject,
    notLoggedIn?: google_protobuf_empty_pb.Empty.AsObject,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    USER_INFO = 1,
    NOT_LOGGED_IN = 2,
  }
}

export class UserInfo extends jspb.Message {
  getDisplayname(): string;
  setDisplayname(value: string): UserInfo;

  getDevFlatpaksList(): Array<string>;
  setDevFlatpaksList(value: Array<string>): UserInfo;
  clearDevFlatpaksList(): UserInfo;
  addDevFlatpaks(value: string, index?: number): UserInfo;

  getPermissionsList(): Array<string>;
  setPermissionsList(value: Array<string>): UserInfo;
  clearPermissionsList(): UserInfo;
  addPermissions(value: string, index?: number): UserInfo;

  getOwnedFlatpaksList(): Array<string>;
  setOwnedFlatpaksList(value: Array<string>): UserInfo;
  clearOwnedFlatpaksList(): UserInfo;
  addOwnedFlatpaks(value: string, index?: number): UserInfo;

  getInvitedFlatpaksList(): Array<string>;
  setInvitedFlatpaksList(value: Array<string>): UserInfo;
  clearInvitedFlatpaksList(): UserInfo;
  addInvitedFlatpaks(value: string, index?: number): UserInfo;

  getInviteCode(): string;
  setInviteCode(value: string): UserInfo;

  getAcceptedPublisherAgreementAt(): string;
  setAcceptedPublisherAgreementAt(value: string): UserInfo;

  getDefaultAccount(): AuthInfo | undefined;
  setDefaultAccount(value?: AuthInfo): UserInfo;
  hasDefaultAccount(): boolean;
  clearDefaultAccount(): UserInfo;

  getAuths(): Auths | undefined;
  setAuths(value?: Auths): UserInfo;
  hasAuths(): boolean;
  clearAuths(): UserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
  static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInfo;
  static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
  export type AsObject = {
    displayname: string,
    devFlatpaksList: Array<string>,
    permissionsList: Array<string>,
    ownedFlatpaksList: Array<string>,
    invitedFlatpaksList: Array<string>,
    inviteCode: string,
    acceptedPublisherAgreementAt: string,
    defaultAccount?: AuthInfo.AsObject,
    auths?: Auths.AsObject,
  }
}

export class AuthInfo extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): AuthInfo;

  getAvatar(): string;
  setAvatar(value: string): AuthInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AuthInfo): AuthInfo.AsObject;
  static serializeBinaryToWriter(message: AuthInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthInfo;
  static deserializeBinaryFromReader(message: AuthInfo, reader: jspb.BinaryReader): AuthInfo;
}

export namespace AuthInfo {
  export type AsObject = {
    login: string,
    avatar: string,
  }
}

export class Auths extends jspb.Message {
  getGithub(): AuthInfo | undefined;
  setGithub(value?: AuthInfo): Auths;
  hasGithub(): boolean;
  clearGithub(): Auths;

  getGitlab(): AuthInfo | undefined;
  setGitlab(value?: AuthInfo): Auths;
  hasGitlab(): boolean;
  clearGitlab(): Auths;

  getGnome(): AuthInfo | undefined;
  setGnome(value?: AuthInfo): Auths;
  hasGnome(): boolean;
  clearGnome(): Auths;

  getKde(): AuthInfo | undefined;
  setKde(value?: AuthInfo): Auths;
  hasKde(): boolean;
  clearKde(): Auths;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Auths.AsObject;
  static toObject(includeInstance: boolean, msg: Auths): Auths.AsObject;
  static serializeBinaryToWriter(message: Auths, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Auths;
  static deserializeBinaryFromReader(message: Auths, reader: jspb.BinaryReader): Auths;
}

export namespace Auths {
  export type AsObject = {
    github?: AuthInfo.AsObject,
    gitlab?: AuthInfo.AsObject,
    gnome?: AuthInfo.AsObject,
    kde?: AuthInfo.AsObject,
  }
}

export class RefreshDevFlatpaksResponse extends jspb.Message {
  getDevFlatpaksList(): Array<string>;
  setDevFlatpaksList(value: Array<string>): RefreshDevFlatpaksResponse;
  clearDevFlatpaksList(): RefreshDevFlatpaksResponse;
  addDevFlatpaks(value: string, index?: number): RefreshDevFlatpaksResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshDevFlatpaksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshDevFlatpaksResponse): RefreshDevFlatpaksResponse.AsObject;
  static serializeBinaryToWriter(message: RefreshDevFlatpaksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshDevFlatpaksResponse;
  static deserializeBinaryFromReader(message: RefreshDevFlatpaksResponse, reader: jspb.BinaryReader): RefreshDevFlatpaksResponse;
}

export namespace RefreshDevFlatpaksResponse {
  export type AsObject = {
    devFlatpaksList: Array<string>,
  }
}

export class GetDeleteUserResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): GetDeleteUserResponse;

  getToken(): string;
  setToken(value: string): GetDeleteUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeleteUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeleteUserResponse): GetDeleteUserResponse.AsObject;
  static serializeBinaryToWriter(message: GetDeleteUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeleteUserResponse;
  static deserializeBinaryFromReader(message: GetDeleteUserResponse, reader: jspb.BinaryReader): GetDeleteUserResponse;
}

export namespace GetDeleteUserResponse {
  export type AsObject = {
    status: string,
    token: string,
  }
}

export class DeleteUserRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): DeleteUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
  static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
  export type AsObject = {
    token: string,
  }
}

export class DeleteUserResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): DeleteUserResponse;

  getMessage(): string;
  setMessage(value: string): DeleteUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserResponse): DeleteUserResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserResponse;
  static deserializeBinaryFromReader(message: DeleteUserResponse, reader: jspb.BinaryReader): DeleteUserResponse;
}

export namespace DeleteUserResponse {
  export type AsObject = {
    status: string,
    message: string,
  }
}

export class ChangeDefaultAccountRequest extends jspb.Message {
  getProvider(): string;
  setProvider(value: string): ChangeDefaultAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeDefaultAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeDefaultAccountRequest): ChangeDefaultAccountRequest.AsObject;
  static serializeBinaryToWriter(message: ChangeDefaultAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeDefaultAccountRequest;
  static deserializeBinaryFromReader(message: ChangeDefaultAccountRequest, reader: jspb.BinaryReader): ChangeDefaultAccountRequest;
}

export namespace ChangeDefaultAccountRequest {
  export type AsObject = {
    provider: string,
  }
}

export class WalletInfoResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): WalletInfoResponse;

  getCardsList(): Array<PaymentCardInfo>;
  setCardsList(value: Array<PaymentCardInfo>): WalletInfoResponse;
  clearCardsList(): WalletInfoResponse;
  addCards(value?: PaymentCardInfo, index?: number): PaymentCardInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WalletInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WalletInfoResponse): WalletInfoResponse.AsObject;
  static serializeBinaryToWriter(message: WalletInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WalletInfoResponse;
  static deserializeBinaryFromReader(message: WalletInfoResponse, reader: jspb.BinaryReader): WalletInfoResponse;
}

export namespace WalletInfoResponse {
  export type AsObject = {
    status: string,
    cardsList: Array<PaymentCardInfo.AsObject>,
  }
}

export class PaymentCardInfo extends jspb.Message {
  getId(): string;
  setId(value: string): PaymentCardInfo;

  getBrand(): string;
  setBrand(value: string): PaymentCardInfo;

  getCountry(): string;
  setCountry(value: string): PaymentCardInfo;

  getExpMonth(): number;
  setExpMonth(value: number): PaymentCardInfo;

  getExpYear(): number;
  setExpYear(value: number): PaymentCardInfo;

  getLast4(): string;
  setLast4(value: string): PaymentCardInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentCardInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentCardInfo): PaymentCardInfo.AsObject;
  static serializeBinaryToWriter(message: PaymentCardInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentCardInfo;
  static deserializeBinaryFromReader(message: PaymentCardInfo, reader: jspb.BinaryReader): PaymentCardInfo;
}

export namespace PaymentCardInfo {
  export type AsObject = {
    id: string,
    brand: string,
    country: string,
    expMonth: number,
    expYear: number,
    last4: string,
  }
}

export class RemoveCardRequest extends jspb.Message {
  getCard(): PaymentCardInfo | undefined;
  setCard(value?: PaymentCardInfo): RemoveCardRequest;
  hasCard(): boolean;
  clearCard(): RemoveCardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveCardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveCardRequest): RemoveCardRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveCardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveCardRequest;
  static deserializeBinaryFromReader(message: RemoveCardRequest, reader: jspb.BinaryReader): RemoveCardRequest;
}

export namespace RemoveCardRequest {
  export type AsObject = {
    card?: PaymentCardInfo.AsObject,
  }
}

export class GetTransactionsRequest extends jspb.Message {
  getSort(): string;
  setSort(value: string): GetTransactionsRequest;

  getSince(): string;
  setSince(value: string): GetTransactionsRequest;

  getLimit(): number;
  setLimit(value: number): GetTransactionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionsRequest): GetTransactionsRequest.AsObject;
  static serializeBinaryToWriter(message: GetTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionsRequest;
  static deserializeBinaryFromReader(message: GetTransactionsRequest, reader: jspb.BinaryReader): GetTransactionsRequest;
}

export namespace GetTransactionsRequest {
  export type AsObject = {
    sort: string,
    since: string,
    limit: number,
  }
}

export class GetTransactionsResponse extends jspb.Message {
  getTransactionsList(): Array<TransactionSummary>;
  setTransactionsList(value: Array<TransactionSummary>): GetTransactionsResponse;
  clearTransactionsList(): GetTransactionsResponse;
  addTransactions(value?: TransactionSummary, index?: number): TransactionSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionsResponse): GetTransactionsResponse.AsObject;
  static serializeBinaryToWriter(message: GetTransactionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionsResponse;
  static deserializeBinaryFromReader(message: GetTransactionsResponse, reader: jspb.BinaryReader): GetTransactionsResponse;
}

export namespace GetTransactionsResponse {
  export type AsObject = {
    transactionsList: Array<TransactionSummary.AsObject>,
  }
}

export class CreateTransactionRequest extends jspb.Message {
  getTransaction(): NascentTransaction | undefined;
  setTransaction(value?: NascentTransaction): CreateTransactionRequest;
  hasTransaction(): boolean;
  clearTransaction(): CreateTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTransactionRequest): CreateTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTransactionRequest;
  static deserializeBinaryFromReader(message: CreateTransactionRequest, reader: jspb.BinaryReader): CreateTransactionRequest;
}

export namespace CreateTransactionRequest {
  export type AsObject = {
    transaction?: NascentTransaction.AsObject,
  }
}

export class CreateTransactionResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): CreateTransactionResponse;

  getId(): string;
  setId(value: string): CreateTransactionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTransactionResponse): CreateTransactionResponse.AsObject;
  static serializeBinaryToWriter(message: CreateTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTransactionResponse;
  static deserializeBinaryFromReader(message: CreateTransactionResponse, reader: jspb.BinaryReader): CreateTransactionResponse;
}

export namespace CreateTransactionResponse {
  export type AsObject = {
    status: string,
    id: string,
  }
}

export class GetTransactionByIdRequest extends jspb.Message {
  getTxn(): string;
  setTxn(value: string): GetTransactionByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionByIdRequest): GetTransactionByIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetTransactionByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionByIdRequest;
  static deserializeBinaryFromReader(message: GetTransactionByIdRequest, reader: jspb.BinaryReader): GetTransactionByIdRequest;
}

export namespace GetTransactionByIdRequest {
  export type AsObject = {
    txn: string,
  }
}

export class TransactionResponse extends jspb.Message {
  getSummary(): TransactionSummary | undefined;
  setSummary(value?: TransactionSummary): TransactionResponse;
  hasSummary(): boolean;
  clearSummary(): TransactionResponse;

  getCard(): PaymentCardInfo | undefined;
  setCard(value?: PaymentCardInfo): TransactionResponse;
  hasCard(): boolean;
  clearCard(): TransactionResponse;

  getDetailsList(): Array<TransactionRow>;
  setDetailsList(value: Array<TransactionRow>): TransactionResponse;
  clearDetailsList(): TransactionResponse;
  addDetails(value?: TransactionRow, index?: number): TransactionRow;

  getReceipt(): string;
  setReceipt(value: string): TransactionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionResponse): TransactionResponse.AsObject;
  static serializeBinaryToWriter(message: TransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionResponse;
  static deserializeBinaryFromReader(message: TransactionResponse, reader: jspb.BinaryReader): TransactionResponse;
}

export namespace TransactionResponse {
  export type AsObject = {
    summary?: TransactionSummary.AsObject,
    card?: PaymentCardInfo.AsObject,
    detailsList: Array<TransactionRow.AsObject>,
    receipt: string,
  }
}

export class SetTransactionCardRequest extends jspb.Message {
  getTxn(): string;
  setTxn(value: string): SetTransactionCardRequest;

  getCard(): PaymentCardInfo | undefined;
  setCard(value?: PaymentCardInfo): SetTransactionCardRequest;
  hasCard(): boolean;
  clearCard(): SetTransactionCardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetTransactionCardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetTransactionCardRequest): SetTransactionCardRequest.AsObject;
  static serializeBinaryToWriter(message: SetTransactionCardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetTransactionCardRequest;
  static deserializeBinaryFromReader(message: SetTransactionCardRequest, reader: jspb.BinaryReader): SetTransactionCardRequest;
}

export namespace SetTransactionCardRequest {
  export type AsObject = {
    txn: string,
    card?: PaymentCardInfo.AsObject,
  }
}

export class CancelTransactionRequest extends jspb.Message {
  getTxn(): string;
  setTxn(value: string): CancelTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelTransactionRequest): CancelTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: CancelTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelTransactionRequest;
  static deserializeBinaryFromReader(message: CancelTransactionRequest, reader: jspb.BinaryReader): CancelTransactionRequest;
}

export namespace CancelTransactionRequest {
  export type AsObject = {
    txn: string,
  }
}

export class StripeKeysResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): StripeKeysResponse;

  getPublicKey(): string;
  setPublicKey(value: string): StripeKeysResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StripeKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StripeKeysResponse): StripeKeysResponse.AsObject;
  static serializeBinaryToWriter(message: StripeKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StripeKeysResponse;
  static deserializeBinaryFromReader(message: StripeKeysResponse, reader: jspb.BinaryReader): StripeKeysResponse;
}

export namespace StripeKeysResponse {
  export type AsObject = {
    status: string,
    publicKey: string,
  }
}

export class GetTransactionStripeDataRequest extends jspb.Message {
  getTxn(): string;
  setTxn(value: string): GetTransactionStripeDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionStripeDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionStripeDataRequest): GetTransactionStripeDataRequest.AsObject;
  static serializeBinaryToWriter(message: GetTransactionStripeDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionStripeDataRequest;
  static deserializeBinaryFromReader(message: GetTransactionStripeDataRequest, reader: jspb.BinaryReader): GetTransactionStripeDataRequest;
}

export namespace GetTransactionStripeDataRequest {
  export type AsObject = {
    txn: string,
  }
}

export class TransactionStripeDataResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): TransactionStripeDataResponse;

  getClientSecret(): string;
  setClientSecret(value: string): TransactionStripeDataResponse;

  getCard(): PaymentCardInfo | undefined;
  setCard(value?: PaymentCardInfo): TransactionStripeDataResponse;
  hasCard(): boolean;
  clearCard(): TransactionStripeDataResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionStripeDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionStripeDataResponse): TransactionStripeDataResponse.AsObject;
  static serializeBinaryToWriter(message: TransactionStripeDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionStripeDataResponse;
  static deserializeBinaryFromReader(message: TransactionStripeDataResponse, reader: jspb.BinaryReader): TransactionStripeDataResponse;
}

export namespace TransactionStripeDataResponse {
  export type AsObject = {
    status: string,
    clientSecret: string,
    card?: PaymentCardInfo.AsObject,
  }
}

export class SetSaveCardRequest extends jspb.Message {
  getTxn(): string;
  setTxn(value: string): SetSaveCardRequest;

  getSaveCard(): TransactionSaveCard | undefined;
  setSaveCard(value?: TransactionSaveCard): SetSaveCardRequest;
  hasSaveCard(): boolean;
  clearSaveCard(): SetSaveCardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSaveCardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetSaveCardRequest): SetSaveCardRequest.AsObject;
  static serializeBinaryToWriter(message: SetSaveCardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSaveCardRequest;
  static deserializeBinaryFromReader(message: SetSaveCardRequest, reader: jspb.BinaryReader): SetSaveCardRequest;
}

export namespace SetSaveCardRequest {
  export type AsObject = {
    txn: string,
    saveCard?: TransactionSaveCard.AsObject,
  }
}

export class SetPendingRequest extends jspb.Message {
  getTxn(): string;
  setTxn(value: string): SetPendingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPendingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetPendingRequest): SetPendingRequest.AsObject;
  static serializeBinaryToWriter(message: SetPendingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPendingRequest;
  static deserializeBinaryFromReader(message: SetPendingRequest, reader: jspb.BinaryReader): SetPendingRequest;
}

export namespace SetPendingRequest {
  export type AsObject = {
    txn: string,
  }
}

export class TransactionSaveCard extends jspb.Message {
  getSaveCard(): string;
  setSaveCard(value: string): TransactionSaveCard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionSaveCard.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionSaveCard): TransactionSaveCard.AsObject;
  static serializeBinaryToWriter(message: TransactionSaveCard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionSaveCard;
  static deserializeBinaryFromReader(message: TransactionSaveCard, reader: jspb.BinaryReader): TransactionSaveCard;
}

export namespace TransactionSaveCard {
  export type AsObject = {
    saveCard: string,
  }
}

export class NascentTransaction extends jspb.Message {
  getSummary(): NascentTransactionSummary | undefined;
  setSummary(value?: NascentTransactionSummary): NascentTransaction;
  hasSummary(): boolean;
  clearSummary(): NascentTransaction;

  getDetailsList(): Array<TransactionRow>;
  setDetailsList(value: Array<TransactionRow>): NascentTransaction;
  clearDetailsList(): NascentTransaction;
  addDetails(value?: TransactionRow, index?: number): TransactionRow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NascentTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: NascentTransaction): NascentTransaction.AsObject;
  static serializeBinaryToWriter(message: NascentTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NascentTransaction;
  static deserializeBinaryFromReader(message: NascentTransaction, reader: jspb.BinaryReader): NascentTransaction;
}

export namespace NascentTransaction {
  export type AsObject = {
    summary?: NascentTransactionSummary.AsObject,
    detailsList: Array<TransactionRow.AsObject>,
  }
}

export class NascentTransactionSummary extends jspb.Message {
  getValue(): number;
  setValue(value: number): NascentTransactionSummary;

  getCurrency(): string;
  setCurrency(value: string): NascentTransactionSummary;

  getKind(): string;
  setKind(value: string): NascentTransactionSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NascentTransactionSummary.AsObject;
  static toObject(includeInstance: boolean, msg: NascentTransactionSummary): NascentTransactionSummary.AsObject;
  static serializeBinaryToWriter(message: NascentTransactionSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NascentTransactionSummary;
  static deserializeBinaryFromReader(message: NascentTransactionSummary, reader: jspb.BinaryReader): NascentTransactionSummary;
}

export namespace NascentTransactionSummary {
  export type AsObject = {
    value: number,
    currency: string,
    kind: string,
  }
}

export class TransactionSummary extends jspb.Message {
  getId(): string;
  setId(value: string): TransactionSummary;

  getValue(): number;
  setValue(value: number): TransactionSummary;

  getCurrency(): string;
  setCurrency(value: string): TransactionSummary;

  getKind(): string;
  setKind(value: string): TransactionSummary;

  getStatus(): string;
  setStatus(value: string): TransactionSummary;

  getReason(): string;
  setReason(value: string): TransactionSummary;

  getCreated(): number;
  setCreated(value: number): TransactionSummary;

  getUpdated(): number;
  setUpdated(value: number): TransactionSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionSummary.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionSummary): TransactionSummary.AsObject;
  static serializeBinaryToWriter(message: TransactionSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionSummary;
  static deserializeBinaryFromReader(message: TransactionSummary, reader: jspb.BinaryReader): TransactionSummary;
}

export namespace TransactionSummary {
  export type AsObject = {
    id: string,
    value: number,
    currency: string,
    kind: string,
    status: string,
    reason: string,
    created: number,
    updated: number,
  }
}

export class TransactionRow extends jspb.Message {
  getRecipient(): string;
  setRecipient(value: string): TransactionRow;

  getAmount(): number;
  setAmount(value: number): TransactionRow;

  getCurrency(): string;
  setCurrency(value: string): TransactionRow;

  getKind(): string;
  setKind(value: string): TransactionRow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionRow.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionRow): TransactionRow.AsObject;
  static serializeBinaryToWriter(message: TransactionRow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionRow;
  static deserializeBinaryFromReader(message: TransactionRow, reader: jspb.BinaryReader): TransactionRow;
}

export namespace TransactionRow {
  export type AsObject = {
    recipient: string,
    amount: number,
    currency: string,
    kind: string,
  }
}

export class VendingStatusResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): VendingStatusResponse;

  getCanTakePayments(): boolean;
  setCanTakePayments(value: boolean): VendingStatusResponse;

  getNeedsAttention(): boolean;
  setNeedsAttention(value: boolean): VendingStatusResponse;

  getDetailsSubmitted(): boolean;
  setDetailsSubmitted(value: boolean): VendingStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VendingStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VendingStatusResponse): VendingStatusResponse.AsObject;
  static serializeBinaryToWriter(message: VendingStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VendingStatusResponse;
  static deserializeBinaryFromReader(message: VendingStatusResponse, reader: jspb.BinaryReader): VendingStatusResponse;
}

export namespace VendingStatusResponse {
  export type AsObject = {
    status: string,
    canTakePayments: boolean,
    needsAttention: boolean,
    detailsSubmitted: boolean,
  }
}

export class StartOnboardingRequest extends jspb.Message {
  getReturnUrl(): string;
  setReturnUrl(value: string): StartOnboardingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartOnboardingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartOnboardingRequest): StartOnboardingRequest.AsObject;
  static serializeBinaryToWriter(message: StartOnboardingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartOnboardingRequest;
  static deserializeBinaryFromReader(message: StartOnboardingRequest, reader: jspb.BinaryReader): StartOnboardingRequest;
}

export namespace StartOnboardingRequest {
  export type AsObject = {
    returnUrl: string,
  }
}

export class VendingRedirectResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): VendingRedirectResponse;

  getTargetUrl(): string;
  setTargetUrl(value: string): VendingRedirectResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VendingRedirectResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VendingRedirectResponse): VendingRedirectResponse.AsObject;
  static serializeBinaryToWriter(message: VendingRedirectResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VendingRedirectResponse;
  static deserializeBinaryFromReader(message: VendingRedirectResponse, reader: jspb.BinaryReader): VendingRedirectResponse;
}

export namespace VendingRedirectResponse {
  export type AsObject = {
    status: string,
    targetUrl: string,
  }
}

export class VendingConfigResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): VendingConfigResponse;

  getPlatformsMap(): jspb.Map<string, Platform>;
  clearPlatformsMap(): VendingConfigResponse;

  getFeeFixedCost(): number;
  setFeeFixedCost(value: number): VendingConfigResponse;

  getFeeCostPercent(): number;
  setFeeCostPercent(value: number): VendingConfigResponse;

  getFeePreferPercent(): number;
  setFeePreferPercent(value: number): VendingConfigResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VendingConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VendingConfigResponse): VendingConfigResponse.AsObject;
  static serializeBinaryToWriter(message: VendingConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VendingConfigResponse;
  static deserializeBinaryFromReader(message: VendingConfigResponse, reader: jspb.BinaryReader): VendingConfigResponse;
}

export namespace VendingConfigResponse {
  export type AsObject = {
    status: string,
    platformsMap: Array<[string, Platform.AsObject]>,
    feeFixedCost: number,
    feeCostPercent: number,
    feePreferPercent: number,
  }
}

export class GetAppVendingSetupRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): GetAppVendingSetupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAppVendingSetupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAppVendingSetupRequest): GetAppVendingSetupRequest.AsObject;
  static serializeBinaryToWriter(message: GetAppVendingSetupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAppVendingSetupRequest;
  static deserializeBinaryFromReader(message: GetAppVendingSetupRequest, reader: jspb.BinaryReader): GetAppVendingSetupRequest;
}

export namespace GetAppVendingSetupRequest {
  export type AsObject = {
    appId: string,
  }
}

export class VendingSetupResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): VendingSetupResponse;

  getCurrency(): string;
  setCurrency(value: string): VendingSetupResponse;

  getAppshare(): number;
  setAppshare(value: number): VendingSetupResponse;

  getRecommendedDonation(): number;
  setRecommendedDonation(value: number): VendingSetupResponse;

  getMinimumPayment(): number;
  setMinimumPayment(value: number): VendingSetupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VendingSetupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VendingSetupResponse): VendingSetupResponse.AsObject;
  static serializeBinaryToWriter(message: VendingSetupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VendingSetupResponse;
  static deserializeBinaryFromReader(message: VendingSetupResponse, reader: jspb.BinaryReader): VendingSetupResponse;
}

export namespace VendingSetupResponse {
  export type AsObject = {
    status: string,
    currency: string,
    appshare: number,
    recommendedDonation: number,
    minimumPayment: number,
  }
}

export class PostAppVendingSetupRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): PostAppVendingSetupRequest;

  getSetup(): VendingSetupRequest | undefined;
  setSetup(value?: VendingSetupRequest): PostAppVendingSetupRequest;
  hasSetup(): boolean;
  clearSetup(): PostAppVendingSetupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAppVendingSetupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostAppVendingSetupRequest): PostAppVendingSetupRequest.AsObject;
  static serializeBinaryToWriter(message: PostAppVendingSetupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAppVendingSetupRequest;
  static deserializeBinaryFromReader(message: PostAppVendingSetupRequest, reader: jspb.BinaryReader): PostAppVendingSetupRequest;
}

export namespace PostAppVendingSetupRequest {
  export type AsObject = {
    appId: string,
    setup?: VendingSetupRequest.AsObject,
  }
}

export class PostAppVendingStatusRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): PostAppVendingStatusRequest;

  getPayment(): ProposedPayment | undefined;
  setPayment(value?: ProposedPayment): PostAppVendingStatusRequest;
  hasPayment(): boolean;
  clearPayment(): PostAppVendingStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAppVendingStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostAppVendingStatusRequest): PostAppVendingStatusRequest.AsObject;
  static serializeBinaryToWriter(message: PostAppVendingStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAppVendingStatusRequest;
  static deserializeBinaryFromReader(message: PostAppVendingStatusRequest, reader: jspb.BinaryReader): PostAppVendingStatusRequest;
}

export namespace PostAppVendingStatusRequest {
  export type AsObject = {
    appId: string,
    payment?: ProposedPayment.AsObject,
  }
}

export class VendingOutputResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): VendingOutputResponse;

  getTransaction(): string;
  setTransaction(value: string): VendingOutputResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VendingOutputResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VendingOutputResponse): VendingOutputResponse.AsObject;
  static serializeBinaryToWriter(message: VendingOutputResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VendingOutputResponse;
  static deserializeBinaryFromReader(message: VendingOutputResponse, reader: jspb.BinaryReader): VendingOutputResponse;
}

export namespace VendingOutputResponse {
  export type AsObject = {
    status: string,
    transaction: string,
  }
}

export class GetRedeemableTokensRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): GetRedeemableTokensRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRedeemableTokensRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRedeemableTokensRequest): GetRedeemableTokensRequest.AsObject;
  static serializeBinaryToWriter(message: GetRedeemableTokensRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRedeemableTokensRequest;
  static deserializeBinaryFromReader(message: GetRedeemableTokensRequest, reader: jspb.BinaryReader): GetRedeemableTokensRequest;
}

export namespace GetRedeemableTokensRequest {
  export type AsObject = {
    appId: string,
  }
}

export class TokenListResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): TokenListResponse;

  getTotal(): number;
  setTotal(value: number): TokenListResponse;

  getTokensList(): Array<TokenModel>;
  setTokensList(value: Array<TokenModel>): TokenListResponse;
  clearTokensList(): TokenListResponse;
  addTokens(value?: TokenModel, index?: number): TokenModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenListResponse): TokenListResponse.AsObject;
  static serializeBinaryToWriter(message: TokenListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenListResponse;
  static deserializeBinaryFromReader(message: TokenListResponse, reader: jspb.BinaryReader): TokenListResponse;
}

export namespace TokenListResponse {
  export type AsObject = {
    status: string,
    total: number,
    tokensList: Array<TokenModel.AsObject>,
  }
}

export class CreateTokensRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): CreateTokensRequest;

  getTokensList(): Array<string>;
  setTokensList(value: Array<string>): CreateTokensRequest;
  clearTokensList(): CreateTokensRequest;
  addTokens(value: string, index?: number): CreateTokensRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTokensRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTokensRequest): CreateTokensRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTokensRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTokensRequest;
  static deserializeBinaryFromReader(message: CreateTokensRequest, reader: jspb.BinaryReader): CreateTokensRequest;
}

export namespace CreateTokensRequest {
  export type AsObject = {
    appId: string,
    tokensList: Array<string>,
  }
}

export class CreateTokensResponse extends jspb.Message {
  getTokensList(): Array<TokenModel>;
  setTokensList(value: Array<TokenModel>): CreateTokensResponse;
  clearTokensList(): CreateTokensResponse;
  addTokens(value?: TokenModel, index?: number): TokenModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTokensResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTokensResponse): CreateTokensResponse.AsObject;
  static serializeBinaryToWriter(message: CreateTokensResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTokensResponse;
  static deserializeBinaryFromReader(message: CreateTokensResponse, reader: jspb.BinaryReader): CreateTokensResponse;
}

export namespace CreateTokensResponse {
  export type AsObject = {
    tokensList: Array<TokenModel.AsObject>,
  }
}

export class CancelTokensRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): CancelTokensRequest;

  getTokensList(): Array<string>;
  setTokensList(value: Array<string>): CancelTokensRequest;
  clearTokensList(): CancelTokensRequest;
  addTokens(value: string, index?: number): CancelTokensRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelTokensRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelTokensRequest): CancelTokensRequest.AsObject;
  static serializeBinaryToWriter(message: CancelTokensRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelTokensRequest;
  static deserializeBinaryFromReader(message: CancelTokensRequest, reader: jspb.BinaryReader): CancelTokensRequest;
}

export namespace CancelTokensRequest {
  export type AsObject = {
    appId: string,
    tokensList: Array<string>,
  }
}

export class CancelTokensResponse extends jspb.Message {
  getCancellationsList(): Array<TokenCancellation>;
  setCancellationsList(value: Array<TokenCancellation>): CancelTokensResponse;
  clearCancellationsList(): CancelTokensResponse;
  addCancellations(value?: TokenCancellation, index?: number): TokenCancellation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelTokensResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelTokensResponse): CancelTokensResponse.AsObject;
  static serializeBinaryToWriter(message: CancelTokensResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelTokensResponse;
  static deserializeBinaryFromReader(message: CancelTokensResponse, reader: jspb.BinaryReader): CancelTokensResponse;
}

export namespace CancelTokensResponse {
  export type AsObject = {
    cancellationsList: Array<TokenCancellation.AsObject>,
  }
}

export class RedeemTokenRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): RedeemTokenRequest;

  getToken(): string;
  setToken(value: string): RedeemTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RedeemTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RedeemTokenRequest): RedeemTokenRequest.AsObject;
  static serializeBinaryToWriter(message: RedeemTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RedeemTokenRequest;
  static deserializeBinaryFromReader(message: RedeemTokenRequest, reader: jspb.BinaryReader): RedeemTokenRequest;
}

export namespace RedeemTokenRequest {
  export type AsObject = {
    appId: string,
    token: string,
  }
}

export class RedemptionResultResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): RedemptionResultResponse;

  getReason(): string;
  setReason(value: string): RedemptionResultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RedemptionResultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RedemptionResultResponse): RedemptionResultResponse.AsObject;
  static serializeBinaryToWriter(message: RedemptionResultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RedemptionResultResponse;
  static deserializeBinaryFromReader(message: RedemptionResultResponse, reader: jspb.BinaryReader): RedemptionResultResponse;
}

export namespace RedemptionResultResponse {
  export type AsObject = {
    status: string,
    reason: string,
  }
}

export class GetAppInfoRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): GetAppInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAppInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAppInfoRequest): GetAppInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetAppInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAppInfoRequest;
  static deserializeBinaryFromReader(message: GetAppInfoRequest, reader: jspb.BinaryReader): GetAppInfoRequest;
}

export namespace GetAppInfoRequest {
  export type AsObject = {
    appId: string,
  }
}

export class VendingApplicationInformationResponse extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): VendingApplicationInformationResponse;

  getKind(): string;
  setKind(value: string): VendingApplicationInformationResponse;

  getKindReason(): string;
  setKindReason(value: string): VendingApplicationInformationResponse;

  getFoss(): boolean;
  setFoss(value: boolean): VendingApplicationInformationResponse;

  getFossReason(): string;
  setFossReason(value: string): VendingApplicationInformationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VendingApplicationInformationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VendingApplicationInformationResponse): VendingApplicationInformationResponse.AsObject;
  static serializeBinaryToWriter(message: VendingApplicationInformationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VendingApplicationInformationResponse;
  static deserializeBinaryFromReader(message: VendingApplicationInformationResponse, reader: jspb.BinaryReader): VendingApplicationInformationResponse;
}

export namespace VendingApplicationInformationResponse {
  export type AsObject = {
    appId: string,
    kind: string,
    kindReason: string,
    foss: boolean,
    fossReason: string,
  }
}

export class VendingSetupRequest extends jspb.Message {
  getCurrency(): string;
  setCurrency(value: string): VendingSetupRequest;

  getAppshare(): number;
  setAppshare(value: number): VendingSetupRequest;

  getRecommendedDonation(): number;
  setRecommendedDonation(value: number): VendingSetupRequest;

  getMinimumPayment(): number;
  setMinimumPayment(value: number): VendingSetupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VendingSetupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VendingSetupRequest): VendingSetupRequest.AsObject;
  static serializeBinaryToWriter(message: VendingSetupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VendingSetupRequest;
  static deserializeBinaryFromReader(message: VendingSetupRequest, reader: jspb.BinaryReader): VendingSetupRequest;
}

export namespace VendingSetupRequest {
  export type AsObject = {
    currency: string,
    appshare: number,
    recommendedDonation: number,
    minimumPayment: number,
  }
}

export class ProposedPayment extends jspb.Message {
  getCurrency(): string;
  setCurrency(value: string): ProposedPayment;

  getAmount(): number;
  setAmount(value: number): ProposedPayment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProposedPayment.AsObject;
  static toObject(includeInstance: boolean, msg: ProposedPayment): ProposedPayment.AsObject;
  static serializeBinaryToWriter(message: ProposedPayment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProposedPayment;
  static deserializeBinaryFromReader(message: ProposedPayment, reader: jspb.BinaryReader): ProposedPayment;
}

export namespace ProposedPayment {
  export type AsObject = {
    currency: string,
    amount: number,
  }
}

export class Platform extends jspb.Message {
  getDepends(): string;
  setDepends(value: string): Platform;

  getAliasesList(): Array<string>;
  setAliasesList(value: Array<string>): Platform;
  clearAliasesList(): Platform;
  addAliases(value: string, index?: number): Platform;

  getKeep(): number;
  setKeep(value: number): Platform;

  getStripeAccount(): string;
  setStripeAccount(value: string): Platform;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Platform.AsObject;
  static toObject(includeInstance: boolean, msg: Platform): Platform.AsObject;
  static serializeBinaryToWriter(message: Platform, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Platform;
  static deserializeBinaryFromReader(message: Platform, reader: jspb.BinaryReader): Platform;
}

export namespace Platform {
  export type AsObject = {
    depends: string,
    aliasesList: Array<string>,
    keep: number,
    stripeAccount: string,
  }
}

export class TokenModel extends jspb.Message {
  getId(): string;
  setId(value: string): TokenModel;

  getState(): string;
  setState(value: string): TokenModel;

  getName(): string;
  setName(value: string): TokenModel;

  getToken(): string;
  setToken(value: string): TokenModel;

  getCreated(): string;
  setCreated(value: string): TokenModel;

  getChanged(): string;
  setChanged(value: string): TokenModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenModel.AsObject;
  static toObject(includeInstance: boolean, msg: TokenModel): TokenModel.AsObject;
  static serializeBinaryToWriter(message: TokenModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenModel;
  static deserializeBinaryFromReader(message: TokenModel, reader: jspb.BinaryReader): TokenModel;
}

export namespace TokenModel {
  export type AsObject = {
    id: string,
    state: string,
    name: string,
    token: string,
    created: string,
    changed: string,
  }
}

export class TokenCancellation extends jspb.Message {
  getToken(): string;
  setToken(value: string): TokenCancellation;

  getStatus(): string;
  setStatus(value: string): TokenCancellation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenCancellation.AsObject;
  static toObject(includeInstance: boolean, msg: TokenCancellation): TokenCancellation.AsObject;
  static serializeBinaryToWriter(message: TokenCancellation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenCancellation;
  static deserializeBinaryFromReader(message: TokenCancellation, reader: jspb.BinaryReader): TokenCancellation;
}

export namespace TokenCancellation {
  export type AsObject = {
    token: string,
    status: string,
  }
}

export class GetVerificationStatusRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): GetVerificationStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVerificationStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVerificationStatusRequest): GetVerificationStatusRequest.AsObject;
  static serializeBinaryToWriter(message: GetVerificationStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVerificationStatusRequest;
  static deserializeBinaryFromReader(message: GetVerificationStatusRequest, reader: jspb.BinaryReader): GetVerificationStatusRequest;
}

export namespace GetVerificationStatusRequest {
  export type AsObject = {
    appId: string,
  }
}

export class VerificationStatusResponse extends jspb.Message {
  getNone(): VerificationStatusNone | undefined;
  setNone(value?: VerificationStatusNone): VerificationStatusResponse;
  hasNone(): boolean;
  clearNone(): VerificationStatusResponse;

  getManual(): VerificationStatusManual | undefined;
  setManual(value?: VerificationStatusManual): VerificationStatusResponse;
  hasManual(): boolean;
  clearManual(): VerificationStatusResponse;

  getWebsite(): VerificationStatusWebsite | undefined;
  setWebsite(value?: VerificationStatusWebsite): VerificationStatusResponse;
  hasWebsite(): boolean;
  clearWebsite(): VerificationStatusResponse;

  getLoginProvider(): VerificationStatusLoginProvider | undefined;
  setLoginProvider(value?: VerificationStatusLoginProvider): VerificationStatusResponse;
  hasLoginProvider(): boolean;
  clearLoginProvider(): VerificationStatusResponse;

  getStatusCase(): VerificationStatusResponse.StatusCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerificationStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerificationStatusResponse): VerificationStatusResponse.AsObject;
  static serializeBinaryToWriter(message: VerificationStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerificationStatusResponse;
  static deserializeBinaryFromReader(message: VerificationStatusResponse, reader: jspb.BinaryReader): VerificationStatusResponse;
}

export namespace VerificationStatusResponse {
  export type AsObject = {
    none?: VerificationStatusNone.AsObject,
    manual?: VerificationStatusManual.AsObject,
    website?: VerificationStatusWebsite.AsObject,
    loginProvider?: VerificationStatusLoginProvider.AsObject,
  }

  export enum StatusCase { 
    STATUS_NOT_SET = 0,
    NONE = 1,
    MANUAL = 2,
    WEBSITE = 3,
    LOGIN_PROVIDER = 4,
  }
}

export class GetAvailableMethodsRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): GetAvailableMethodsRequest;

  getNewApp(): boolean;
  setNewApp(value: boolean): GetAvailableMethodsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAvailableMethodsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAvailableMethodsRequest): GetAvailableMethodsRequest.AsObject;
  static serializeBinaryToWriter(message: GetAvailableMethodsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAvailableMethodsRequest;
  static deserializeBinaryFromReader(message: GetAvailableMethodsRequest, reader: jspb.BinaryReader): GetAvailableMethodsRequest;
}

export namespace GetAvailableMethodsRequest {
  export type AsObject = {
    appId: string,
    newApp: boolean,
  }
}

export class AvailableMethodsResponse extends jspb.Message {
  getMethodsList(): Array<AvailableMethod>;
  setMethodsList(value: Array<AvailableMethod>): AvailableMethodsResponse;
  clearMethodsList(): AvailableMethodsResponse;
  addMethods(value?: AvailableMethod, index?: number): AvailableMethod;

  getDetail(): string;
  setDetail(value: string): AvailableMethodsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableMethodsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableMethodsResponse): AvailableMethodsResponse.AsObject;
  static serializeBinaryToWriter(message: AvailableMethodsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableMethodsResponse;
  static deserializeBinaryFromReader(message: AvailableMethodsResponse, reader: jspb.BinaryReader): AvailableMethodsResponse;
}

export namespace AvailableMethodsResponse {
  export type AsObject = {
    methodsList: Array<AvailableMethod.AsObject>,
    detail: string,
  }
}

export class VerifyByLoginProviderRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): VerifyByLoginProviderRequest;

  getNewApp(): boolean;
  setNewApp(value: boolean): VerifyByLoginProviderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyByLoginProviderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyByLoginProviderRequest): VerifyByLoginProviderRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyByLoginProviderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyByLoginProviderRequest;
  static deserializeBinaryFromReader(message: VerifyByLoginProviderRequest, reader: jspb.BinaryReader): VerifyByLoginProviderRequest;
}

export namespace VerifyByLoginProviderRequest {
  export type AsObject = {
    appId: string,
    newApp: boolean,
  }
}

export class VerifyByLoginProviderResponse extends jspb.Message {
  getError(): ErrorReturn | undefined;
  setError(value?: ErrorReturn): VerifyByLoginProviderResponse;
  hasError(): boolean;
  clearError(): VerifyByLoginProviderResponse;

  getSuccess(): google_protobuf_empty_pb.Empty | undefined;
  setSuccess(value?: google_protobuf_empty_pb.Empty): VerifyByLoginProviderResponse;
  hasSuccess(): boolean;
  clearSuccess(): VerifyByLoginProviderResponse;

  getResponseCase(): VerifyByLoginProviderResponse.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyByLoginProviderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyByLoginProviderResponse): VerifyByLoginProviderResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyByLoginProviderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyByLoginProviderResponse;
  static deserializeBinaryFromReader(message: VerifyByLoginProviderResponse, reader: jspb.BinaryReader): VerifyByLoginProviderResponse;
}

export namespace VerifyByLoginProviderResponse {
  export type AsObject = {
    error?: ErrorReturn.AsObject,
    success?: google_protobuf_empty_pb.Empty.AsObject,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    ERROR = 1,
    SUCCESS = 2,
  }
}

export class LinkResponse extends jspb.Message {
  getLink(): string;
  setLink(value: string): LinkResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LinkResponse): LinkResponse.AsObject;
  static serializeBinaryToWriter(message: LinkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkResponse;
  static deserializeBinaryFromReader(message: LinkResponse, reader: jspb.BinaryReader): LinkResponse;
}

export namespace LinkResponse {
  export type AsObject = {
    link: string,
  }
}

export class SetupWebsiteVerificationRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): SetupWebsiteVerificationRequest;

  getNewApp(): boolean;
  setNewApp(value: boolean): SetupWebsiteVerificationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetupWebsiteVerificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetupWebsiteVerificationRequest): SetupWebsiteVerificationRequest.AsObject;
  static serializeBinaryToWriter(message: SetupWebsiteVerificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetupWebsiteVerificationRequest;
  static deserializeBinaryFromReader(message: SetupWebsiteVerificationRequest, reader: jspb.BinaryReader): SetupWebsiteVerificationRequest;
}

export namespace SetupWebsiteVerificationRequest {
  export type AsObject = {
    appId: string,
    newApp: boolean,
  }
}

export class WebsiteVerificationTokenResponse extends jspb.Message {
  getDomain(): string;
  setDomain(value: string): WebsiteVerificationTokenResponse;

  getToken(): string;
  setToken(value: string): WebsiteVerificationTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsiteVerificationTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WebsiteVerificationTokenResponse): WebsiteVerificationTokenResponse.AsObject;
  static serializeBinaryToWriter(message: WebsiteVerificationTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsiteVerificationTokenResponse;
  static deserializeBinaryFromReader(message: WebsiteVerificationTokenResponse, reader: jspb.BinaryReader): WebsiteVerificationTokenResponse;
}

export namespace WebsiteVerificationTokenResponse {
  export type AsObject = {
    domain: string,
    token: string,
  }
}

export class ConfirmWebsiteVerificationRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): ConfirmWebsiteVerificationRequest;

  getNewApp(): boolean;
  setNewApp(value: boolean): ConfirmWebsiteVerificationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmWebsiteVerificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmWebsiteVerificationRequest): ConfirmWebsiteVerificationRequest.AsObject;
  static serializeBinaryToWriter(message: ConfirmWebsiteVerificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmWebsiteVerificationRequest;
  static deserializeBinaryFromReader(message: ConfirmWebsiteVerificationRequest, reader: jspb.BinaryReader): ConfirmWebsiteVerificationRequest;
}

export namespace ConfirmWebsiteVerificationRequest {
  export type AsObject = {
    appId: string,
    newApp: boolean,
  }
}

export class WebsiteVerificationResultResponse extends jspb.Message {
  getVerified(): boolean;
  setVerified(value: boolean): WebsiteVerificationResultResponse;

  getDetail(): string;
  setDetail(value: string): WebsiteVerificationResultResponse;

  getStatusCode(): number;
  setStatusCode(value: number): WebsiteVerificationResultResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebsiteVerificationResultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WebsiteVerificationResultResponse): WebsiteVerificationResultResponse.AsObject;
  static serializeBinaryToWriter(message: WebsiteVerificationResultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebsiteVerificationResultResponse;
  static deserializeBinaryFromReader(message: WebsiteVerificationResultResponse, reader: jspb.BinaryReader): WebsiteVerificationResultResponse;
}

export namespace WebsiteVerificationResultResponse {
  export type AsObject = {
    verified: boolean,
    detail: string,
    statusCode: number,
  }
}

export class UnverifyRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): UnverifyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnverifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnverifyRequest): UnverifyRequest.AsObject;
  static serializeBinaryToWriter(message: UnverifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnverifyRequest;
  static deserializeBinaryFromReader(message: UnverifyRequest, reader: jspb.BinaryReader): UnverifyRequest;
}

export namespace UnverifyRequest {
  export type AsObject = {
    appId: string,
  }
}

export class SwitchToDirectUploadRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): SwitchToDirectUploadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwitchToDirectUploadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SwitchToDirectUploadRequest): SwitchToDirectUploadRequest.AsObject;
  static serializeBinaryToWriter(message: SwitchToDirectUploadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwitchToDirectUploadRequest;
  static deserializeBinaryFromReader(message: SwitchToDirectUploadRequest, reader: jspb.BinaryReader): SwitchToDirectUploadRequest;
}

export namespace SwitchToDirectUploadRequest {
  export type AsObject = {
    appId: string,
  }
}

export class ArchiveRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): ArchiveRequest;

  getEndoflife(): string;
  setEndoflife(value: string): ArchiveRequest;

  getEndoflifeRebase(): string;
  setEndoflifeRebase(value: string): ArchiveRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArchiveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ArchiveRequest): ArchiveRequest.AsObject;
  static serializeBinaryToWriter(message: ArchiveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArchiveRequest;
  static deserializeBinaryFromReader(message: ArchiveRequest, reader: jspb.BinaryReader): ArchiveRequest;
}

export namespace ArchiveRequest {
  export type AsObject = {
    appId: string,
    endoflife: string,
    endoflifeRebase: string,
  }
}

export class VerificationStatusNone extends jspb.Message {
  getVerified(): boolean;
  setVerified(value: boolean): VerificationStatusNone;

  getMethod(): string;
  setMethod(value: string): VerificationStatusNone;

  getDetail(): string;
  setDetail(value: string): VerificationStatusNone;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerificationStatusNone.AsObject;
  static toObject(includeInstance: boolean, msg: VerificationStatusNone): VerificationStatusNone.AsObject;
  static serializeBinaryToWriter(message: VerificationStatusNone, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerificationStatusNone;
  static deserializeBinaryFromReader(message: VerificationStatusNone, reader: jspb.BinaryReader): VerificationStatusNone;
}

export namespace VerificationStatusNone {
  export type AsObject = {
    verified: boolean,
    method: string,
    detail: string,
  }
}

export class VerificationStatusManual extends jspb.Message {
  getVerified(): boolean;
  setVerified(value: boolean): VerificationStatusManual;

  getTimestamp(): string;
  setTimestamp(value: string): VerificationStatusManual;

  getMethod(): string;
  setMethod(value: string): VerificationStatusManual;

  getDetail(): string;
  setDetail(value: string): VerificationStatusManual;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerificationStatusManual.AsObject;
  static toObject(includeInstance: boolean, msg: VerificationStatusManual): VerificationStatusManual.AsObject;
  static serializeBinaryToWriter(message: VerificationStatusManual, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerificationStatusManual;
  static deserializeBinaryFromReader(message: VerificationStatusManual, reader: jspb.BinaryReader): VerificationStatusManual;
}

export namespace VerificationStatusManual {
  export type AsObject = {
    verified: boolean,
    timestamp: string,
    method: string,
    detail: string,
  }
}

export class VerificationStatusWebsite extends jspb.Message {
  getVerified(): boolean;
  setVerified(value: boolean): VerificationStatusWebsite;

  getTimestamp(): string;
  setTimestamp(value: string): VerificationStatusWebsite;

  getMethod(): string;
  setMethod(value: string): VerificationStatusWebsite;

  getWebsite(): string;
  setWebsite(value: string): VerificationStatusWebsite;

  getDetail(): string;
  setDetail(value: string): VerificationStatusWebsite;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerificationStatusWebsite.AsObject;
  static toObject(includeInstance: boolean, msg: VerificationStatusWebsite): VerificationStatusWebsite.AsObject;
  static serializeBinaryToWriter(message: VerificationStatusWebsite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerificationStatusWebsite;
  static deserializeBinaryFromReader(message: VerificationStatusWebsite, reader: jspb.BinaryReader): VerificationStatusWebsite;
}

export namespace VerificationStatusWebsite {
  export type AsObject = {
    verified: boolean,
    timestamp: string,
    method: string,
    website: string,
    detail: string,
  }
}

export class VerificationStatusLoginProvider extends jspb.Message {
  getVerified(): boolean;
  setVerified(value: boolean): VerificationStatusLoginProvider;

  getTimestamp(): string;
  setTimestamp(value: string): VerificationStatusLoginProvider;

  getMethod(): string;
  setMethod(value: string): VerificationStatusLoginProvider;

  getLoginProvider(): string;
  setLoginProvider(value: string): VerificationStatusLoginProvider;

  getLoginName(): string;
  setLoginName(value: string): VerificationStatusLoginProvider;

  getDetail(): string;
  setDetail(value: string): VerificationStatusLoginProvider;

  getLoginIsOrganization(): boolean;
  setLoginIsOrganization(value: boolean): VerificationStatusLoginProvider;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerificationStatusLoginProvider.AsObject;
  static toObject(includeInstance: boolean, msg: VerificationStatusLoginProvider): VerificationStatusLoginProvider.AsObject;
  static serializeBinaryToWriter(message: VerificationStatusLoginProvider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerificationStatusLoginProvider;
  static deserializeBinaryFromReader(message: VerificationStatusLoginProvider, reader: jspb.BinaryReader): VerificationStatusLoginProvider;
}

export namespace VerificationStatusLoginProvider {
  export type AsObject = {
    verified: boolean,
    timestamp: string,
    method: string,
    loginProvider: string,
    loginName: string,
    detail: string,
    loginIsOrganization: boolean,
  }
}

export class AvailableMethod extends jspb.Message {
  getMethod(): string;
  setMethod(value: string): AvailableMethod;

  getWebsite(): string;
  setWebsite(value: string): AvailableMethod;

  getWebsiteToken(): string;
  setWebsiteToken(value: string): AvailableMethod;

  getLoginProvider(): string;
  setLoginProvider(value: string): AvailableMethod;

  getLoginName(): string;
  setLoginName(value: string): AvailableMethod;

  getLoginIsOrganization(): boolean;
  setLoginIsOrganization(value: boolean): AvailableMethod;

  getLoginStatus(): string;
  setLoginStatus(value: string): AvailableMethod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableMethod.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableMethod): AvailableMethod.AsObject;
  static serializeBinaryToWriter(message: AvailableMethod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableMethod;
  static deserializeBinaryFromReader(message: AvailableMethod, reader: jspb.BinaryReader): AvailableMethod;
}

export namespace AvailableMethod {
  export type AsObject = {
    method: string,
    website: string,
    websiteToken: string,
    loginProvider: string,
    loginName: string,
    loginIsOrganization: boolean,
    loginStatus: string,
  }
}

export class ErrorReturn extends jspb.Message {
  getDetail(): string;
  setDetail(value: string): ErrorReturn;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorReturn.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorReturn): ErrorReturn.AsObject;
  static serializeBinaryToWriter(message: ErrorReturn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorReturn;
  static deserializeBinaryFromReader(message: ErrorReturn, reader: jspb.BinaryReader): ErrorReturn;
}

export namespace ErrorReturn {
  export type AsObject = {
    detail: string,
  }
}

export class CategoriesResponse extends jspb.Message {
  getCategoriesList(): Array<string>;
  setCategoriesList(value: Array<string>): CategoriesResponse;
  clearCategoriesList(): CategoriesResponse;
  addCategories(value: string, index?: number): CategoriesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CategoriesResponse): CategoriesResponse.AsObject;
  static serializeBinaryToWriter(message: CategoriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoriesResponse;
  static deserializeBinaryFromReader(message: CategoriesResponse, reader: jspb.BinaryReader): CategoriesResponse;
}

export namespace CategoriesResponse {
  export type AsObject = {
    categoriesList: Array<string>,
  }
}

export class GetCategoryRequest extends jspb.Message {
  getCategory(): string;
  setCategory(value: string): GetCategoryRequest;

  getExcludeSubcategoriesList(): Array<string>;
  setExcludeSubcategoriesList(value: Array<string>): GetCategoryRequest;
  clearExcludeSubcategoriesList(): GetCategoryRequest;
  addExcludeSubcategories(value: string, index?: number): GetCategoryRequest;

  getPage(): number;
  setPage(value: number): GetCategoryRequest;

  getPerPage(): number;
  setPerPage(value: number): GetCategoryRequest;

  getLocale(): string;
  setLocale(value: string): GetCategoryRequest;

  getSortBy(): string;
  setSortBy(value: string): GetCategoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCategoryRequest): GetCategoryRequest.AsObject;
  static serializeBinaryToWriter(message: GetCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCategoryRequest;
  static deserializeBinaryFromReader(message: GetCategoryRequest, reader: jspb.BinaryReader): GetCategoryRequest;
}

export namespace GetCategoryRequest {
  export type AsObject = {
    category: string,
    excludeSubcategoriesList: Array<string>,
    page: number,
    perPage: number,
    locale: string,
    sortBy: string,
  }
}

export class GetSubcategoryRequest extends jspb.Message {
  getCategory(): string;
  setCategory(value: string): GetSubcategoryRequest;

  getSubcategoryList(): Array<string>;
  setSubcategoryList(value: Array<string>): GetSubcategoryRequest;
  clearSubcategoryList(): GetSubcategoryRequest;
  addSubcategory(value: string, index?: number): GetSubcategoryRequest;

  getExcludeSubcategoriesList(): Array<string>;
  setExcludeSubcategoriesList(value: Array<string>): GetSubcategoryRequest;
  clearExcludeSubcategoriesList(): GetSubcategoryRequest;
  addExcludeSubcategories(value: string, index?: number): GetSubcategoryRequest;

  getPage(): number;
  setPage(value: number): GetSubcategoryRequest;

  getPerPage(): number;
  setPerPage(value: number): GetSubcategoryRequest;

  getLocale(): string;
  setLocale(value: string): GetSubcategoryRequest;

  getSortBy(): string;
  setSortBy(value: string): GetSubcategoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSubcategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSubcategoryRequest): GetSubcategoryRequest.AsObject;
  static serializeBinaryToWriter(message: GetSubcategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSubcategoryRequest;
  static deserializeBinaryFromReader(message: GetSubcategoryRequest, reader: jspb.BinaryReader): GetSubcategoryRequest;
}

export namespace GetSubcategoryRequest {
  export type AsObject = {
    category: string,
    subcategoryList: Array<string>,
    excludeSubcategoriesList: Array<string>,
    page: number,
    perPage: number,
    locale: string,
    sortBy: string,
  }
}

export class GetKeywordRequest extends jspb.Message {
  getKeyword(): string;
  setKeyword(value: string): GetKeywordRequest;

  getPage(): number;
  setPage(value: number): GetKeywordRequest;

  getPerPage(): number;
  setPerPage(value: number): GetKeywordRequest;

  getLocale(): string;
  setLocale(value: string): GetKeywordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKeywordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKeywordRequest): GetKeywordRequest.AsObject;
  static serializeBinaryToWriter(message: GetKeywordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKeywordRequest;
  static deserializeBinaryFromReader(message: GetKeywordRequest, reader: jspb.BinaryReader): GetKeywordRequest;
}

export namespace GetKeywordRequest {
  export type AsObject = {
    keyword: string,
    page: number,
    perPage: number,
    locale: string,
  }
}

export class GetDevelopersRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): GetDevelopersRequest;

  getPerPage(): number;
  setPerPage(value: number): GetDevelopersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDevelopersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDevelopersRequest): GetDevelopersRequest.AsObject;
  static serializeBinaryToWriter(message: GetDevelopersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDevelopersRequest;
  static deserializeBinaryFromReader(message: GetDevelopersRequest, reader: jspb.BinaryReader): GetDevelopersRequest;
}

export namespace GetDevelopersRequest {
  export type AsObject = {
    page: number,
    perPage: number,
  }
}

export class DevelopersResponse extends jspb.Message {
  getDevelopersList(): Array<string>;
  setDevelopersList(value: Array<string>): DevelopersResponse;
  clearDevelopersList(): DevelopersResponse;
  addDevelopers(value: string, index?: number): DevelopersResponse;

  getTotal(): number;
  setTotal(value: number): DevelopersResponse;

  getPage(): number;
  setPage(value: number): DevelopersResponse;

  getPerPage(): number;
  setPerPage(value: number): DevelopersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DevelopersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DevelopersResponse): DevelopersResponse.AsObject;
  static serializeBinaryToWriter(message: DevelopersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DevelopersResponse;
  static deserializeBinaryFromReader(message: DevelopersResponse, reader: jspb.BinaryReader): DevelopersResponse;
}

export namespace DevelopersResponse {
  export type AsObject = {
    developersList: Array<string>,
    total: number,
    page: number,
    perPage: number,
  }
}

export class GetDeveloperRequest extends jspb.Message {
  getDeveloper(): string;
  setDeveloper(value: string): GetDeveloperRequest;

  getPage(): number;
  setPage(value: number): GetDeveloperRequest;

  getPerPage(): number;
  setPerPage(value: number): GetDeveloperRequest;

  getLocale(): string;
  setLocale(value: string): GetDeveloperRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeveloperRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeveloperRequest): GetDeveloperRequest.AsObject;
  static serializeBinaryToWriter(message: GetDeveloperRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeveloperRequest;
  static deserializeBinaryFromReader(message: GetDeveloperRequest, reader: jspb.BinaryReader): GetDeveloperRequest;
}

export namespace GetDeveloperRequest {
  export type AsObject = {
    developer: string,
    page: number,
    perPage: number,
    locale: string,
  }
}

export class GetRecentlyUpdatedRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): GetRecentlyUpdatedRequest;

  getPerPage(): number;
  setPerPage(value: number): GetRecentlyUpdatedRequest;

  getLocale(): string;
  setLocale(value: string): GetRecentlyUpdatedRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecentlyUpdatedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecentlyUpdatedRequest): GetRecentlyUpdatedRequest.AsObject;
  static serializeBinaryToWriter(message: GetRecentlyUpdatedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecentlyUpdatedRequest;
  static deserializeBinaryFromReader(message: GetRecentlyUpdatedRequest, reader: jspb.BinaryReader): GetRecentlyUpdatedRequest;
}

export namespace GetRecentlyUpdatedRequest {
  export type AsObject = {
    page: number,
    perPage: number,
    locale: string,
  }
}

export class GetRecentlyAddedRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): GetRecentlyAddedRequest;

  getPerPage(): number;
  setPerPage(value: number): GetRecentlyAddedRequest;

  getLocale(): string;
  setLocale(value: string): GetRecentlyAddedRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecentlyAddedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecentlyAddedRequest): GetRecentlyAddedRequest.AsObject;
  static serializeBinaryToWriter(message: GetRecentlyAddedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecentlyAddedRequest;
  static deserializeBinaryFromReader(message: GetRecentlyAddedRequest, reader: jspb.BinaryReader): GetRecentlyAddedRequest;
}

export namespace GetRecentlyAddedRequest {
  export type AsObject = {
    page: number,
    perPage: number,
    locale: string,
  }
}

export class GetVerifiedRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): GetVerifiedRequest;

  getPerPage(): number;
  setPerPage(value: number): GetVerifiedRequest;

  getLocale(): string;
  setLocale(value: string): GetVerifiedRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVerifiedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVerifiedRequest): GetVerifiedRequest.AsObject;
  static serializeBinaryToWriter(message: GetVerifiedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVerifiedRequest;
  static deserializeBinaryFromReader(message: GetVerifiedRequest, reader: jspb.BinaryReader): GetVerifiedRequest;
}

export namespace GetVerifiedRequest {
  export type AsObject = {
    page: number,
    perPage: number,
    locale: string,
  }
}

export class GetMobileRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): GetMobileRequest;

  getPerPage(): number;
  setPerPage(value: number): GetMobileRequest;

  getLocale(): string;
  setLocale(value: string): GetMobileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMobileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMobileRequest): GetMobileRequest.AsObject;
  static serializeBinaryToWriter(message: GetMobileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMobileRequest;
  static deserializeBinaryFromReader(message: GetMobileRequest, reader: jspb.BinaryReader): GetMobileRequest;
}

export namespace GetMobileRequest {
  export type AsObject = {
    page: number,
    perPage: number,
    locale: string,
  }
}

export class GetPopularLastMonthRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): GetPopularLastMonthRequest;

  getPerPage(): number;
  setPerPage(value: number): GetPopularLastMonthRequest;

  getLocale(): string;
  setLocale(value: string): GetPopularLastMonthRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPopularLastMonthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPopularLastMonthRequest): GetPopularLastMonthRequest.AsObject;
  static serializeBinaryToWriter(message: GetPopularLastMonthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPopularLastMonthRequest;
  static deserializeBinaryFromReader(message: GetPopularLastMonthRequest, reader: jspb.BinaryReader): GetPopularLastMonthRequest;
}

export namespace GetPopularLastMonthRequest {
  export type AsObject = {
    page: number,
    perPage: number,
    locale: string,
  }
}

export class GetTrendingLastTwoWeeksRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): GetTrendingLastTwoWeeksRequest;

  getPerPage(): number;
  setPerPage(value: number): GetTrendingLastTwoWeeksRequest;

  getLocale(): string;
  setLocale(value: string): GetTrendingLastTwoWeeksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTrendingLastTwoWeeksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTrendingLastTwoWeeksRequest): GetTrendingLastTwoWeeksRequest.AsObject;
  static serializeBinaryToWriter(message: GetTrendingLastTwoWeeksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTrendingLastTwoWeeksRequest;
  static deserializeBinaryFromReader(message: GetTrendingLastTwoWeeksRequest, reader: jspb.BinaryReader): GetTrendingLastTwoWeeksRequest;
}

export namespace GetTrendingLastTwoWeeksRequest {
  export type AsObject = {
    page: number,
    perPage: number,
    locale: string,
  }
}

export class GetMostFavoritedRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): GetMostFavoritedRequest;

  getPerPage(): number;
  setPerPage(value: number): GetMostFavoritedRequest;

  getLocale(): string;
  setLocale(value: string): GetMostFavoritedRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMostFavoritedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMostFavoritedRequest): GetMostFavoritedRequest.AsObject;
  static serializeBinaryToWriter(message: GetMostFavoritedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMostFavoritedRequest;
  static deserializeBinaryFromReader(message: GetMostFavoritedRequest, reader: jspb.BinaryReader): GetMostFavoritedRequest;
}

export namespace GetMostFavoritedRequest {
  export type AsObject = {
    page: number,
    perPage: number,
    locale: string,
  }
}

export class AddToFavoritesRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): AddToFavoritesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddToFavoritesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddToFavoritesRequest): AddToFavoritesRequest.AsObject;
  static serializeBinaryToWriter(message: AddToFavoritesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddToFavoritesRequest;
  static deserializeBinaryFromReader(message: AddToFavoritesRequest, reader: jspb.BinaryReader): AddToFavoritesRequest;
}

export namespace AddToFavoritesRequest {
  export type AsObject = {
    appId: string,
  }
}

export class RemoveFromFavoritesRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): RemoveFromFavoritesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveFromFavoritesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveFromFavoritesRequest): RemoveFromFavoritesRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveFromFavoritesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveFromFavoritesRequest;
  static deserializeBinaryFromReader(message: RemoveFromFavoritesRequest, reader: jspb.BinaryReader): RemoveFromFavoritesRequest;
}

export namespace RemoveFromFavoritesRequest {
  export type AsObject = {
    appId: string,
  }
}

export class GetFavoritesResponse extends jspb.Message {
  getFavoritesList(): Array<FavoriteApp>;
  setFavoritesList(value: Array<FavoriteApp>): GetFavoritesResponse;
  clearFavoritesList(): GetFavoritesResponse;
  addFavorites(value?: FavoriteApp, index?: number): FavoriteApp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFavoritesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFavoritesResponse): GetFavoritesResponse.AsObject;
  static serializeBinaryToWriter(message: GetFavoritesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFavoritesResponse;
  static deserializeBinaryFromReader(message: GetFavoritesResponse, reader: jspb.BinaryReader): GetFavoritesResponse;
}

export namespace GetFavoritesResponse {
  export type AsObject = {
    favoritesList: Array<FavoriteApp.AsObject>,
  }
}

export class IsFavoritedRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): IsFavoritedRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsFavoritedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IsFavoritedRequest): IsFavoritedRequest.AsObject;
  static serializeBinaryToWriter(message: IsFavoritedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsFavoritedRequest;
  static deserializeBinaryFromReader(message: IsFavoritedRequest, reader: jspb.BinaryReader): IsFavoritedRequest;
}

export namespace IsFavoritedRequest {
  export type AsObject = {
    appId: string,
  }
}

export class IsFavoritedResponse extends jspb.Message {
  getIsFavorited(): boolean;
  setIsFavorited(value: boolean): IsFavoritedResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IsFavoritedResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IsFavoritedResponse): IsFavoritedResponse.AsObject;
  static serializeBinaryToWriter(message: IsFavoritedResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IsFavoritedResponse;
  static deserializeBinaryFromReader(message: IsFavoritedResponse, reader: jspb.BinaryReader): IsFavoritedResponse;
}

export namespace IsFavoritedResponse {
  export type AsObject = {
    isFavorited: boolean,
  }
}

export class FavoriteApp extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): FavoriteApp;

  getCreatedAt(): string;
  setCreatedAt(value: string): FavoriteApp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FavoriteApp.AsObject;
  static toObject(includeInstance: boolean, msg: FavoriteApp): FavoriteApp.AsObject;
  static serializeBinaryToWriter(message: FavoriteApp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FavoriteApp;
  static deserializeBinaryFromReader(message: FavoriteApp, reader: jspb.BinaryReader): FavoriteApp;
}

export namespace FavoriteApp {
  export type AsObject = {
    appId: string,
    createdAt: string,
  }
}

export class StatsResultResponse extends jspb.Message {
  getStats(): StatsResult | undefined;
  setStats(value?: StatsResult): StatsResultResponse;
  hasStats(): boolean;
  clearStats(): StatsResultResponse;

  getNotAvailable(): google_protobuf_empty_pb.Empty | undefined;
  setNotAvailable(value?: google_protobuf_empty_pb.Empty): StatsResultResponse;
  hasNotAvailable(): boolean;
  clearNotAvailable(): StatsResultResponse;

  getResponseCase(): StatsResultResponse.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatsResultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StatsResultResponse): StatsResultResponse.AsObject;
  static serializeBinaryToWriter(message: StatsResultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatsResultResponse;
  static deserializeBinaryFromReader(message: StatsResultResponse, reader: jspb.BinaryReader): StatsResultResponse;
}

export namespace StatsResultResponse {
  export type AsObject = {
    stats?: StatsResult.AsObject,
    notAvailable?: google_protobuf_empty_pb.Empty.AsObject,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    STATS = 1,
    NOT_AVAILABLE = 2,
  }
}

export class GetStatsForAppRequest extends jspb.Message {
  getAppId(): string;
  setAppId(value: string): GetStatsForAppRequest;

  getAll(): boolean;
  setAll(value: boolean): GetStatsForAppRequest;

  getDays(): number;
  setDays(value: number): GetStatsForAppRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStatsForAppRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStatsForAppRequest): GetStatsForAppRequest.AsObject;
  static serializeBinaryToWriter(message: GetStatsForAppRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStatsForAppRequest;
  static deserializeBinaryFromReader(message: GetStatsForAppRequest, reader: jspb.BinaryReader): GetStatsForAppRequest;
}

export namespace GetStatsForAppRequest {
  export type AsObject = {
    appId: string,
    all: boolean,
    days: number,
  }
}

export class StatsResultAppResponse extends jspb.Message {
  getStats(): StatsResultApp | undefined;
  setStats(value?: StatsResultApp): StatsResultAppResponse;
  hasStats(): boolean;
  clearStats(): StatsResultAppResponse;

  getNotFound(): google_protobuf_empty_pb.Empty | undefined;
  setNotFound(value?: google_protobuf_empty_pb.Empty): StatsResultAppResponse;
  hasNotFound(): boolean;
  clearNotFound(): StatsResultAppResponse;

  getResponseCase(): StatsResultAppResponse.ResponseCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatsResultAppResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StatsResultAppResponse): StatsResultAppResponse.AsObject;
  static serializeBinaryToWriter(message: StatsResultAppResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatsResultAppResponse;
  static deserializeBinaryFromReader(message: StatsResultAppResponse, reader: jspb.BinaryReader): StatsResultAppResponse;
}

export namespace StatsResultAppResponse {
  export type AsObject = {
    stats?: StatsResultApp.AsObject,
    notFound?: google_protobuf_empty_pb.Empty.AsObject,
  }

  export enum ResponseCase { 
    RESPONSE_NOT_SET = 0,
    STATS = 1,
    NOT_FOUND = 2,
  }
}

export class StatsResult extends jspb.Message {
  getTotalsMap(): jspb.Map<string, number>;
  clearTotalsMap(): StatsResult;

  getCountriesMap(): jspb.Map<string, number>;
  clearCountriesMap(): StatsResult;

  getDownloadsPerDayMap(): jspb.Map<string, number>;
  clearDownloadsPerDayMap(): StatsResult;

  getUpdatesPerDayMap(): jspb.Map<string, number>;
  clearUpdatesPerDayMap(): StatsResult;

  getDeltaDownloadsPerDayMap(): jspb.Map<string, number>;
  clearDeltaDownloadsPerDayMap(): StatsResult;

  getCategoryTotalsList(): Array<StatsResultCategoryTotals>;
  setCategoryTotalsList(value: Array<StatsResultCategoryTotals>): StatsResult;
  clearCategoryTotalsList(): StatsResult;
  addCategoryTotals(value?: StatsResultCategoryTotals, index?: number): StatsResultCategoryTotals;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatsResult.AsObject;
  static toObject(includeInstance: boolean, msg: StatsResult): StatsResult.AsObject;
  static serializeBinaryToWriter(message: StatsResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatsResult;
  static deserializeBinaryFromReader(message: StatsResult, reader: jspb.BinaryReader): StatsResult;
}

export namespace StatsResult {
  export type AsObject = {
    totalsMap: Array<[string, number]>,
    countriesMap: Array<[string, number]>,
    downloadsPerDayMap: Array<[string, number]>,
    updatesPerDayMap: Array<[string, number]>,
    deltaDownloadsPerDayMap: Array<[string, number]>,
    categoryTotalsList: Array<StatsResultCategoryTotals.AsObject>,
  }
}

export class StatsResultApp extends jspb.Message {
  getInstallsTotal(): number;
  setInstallsTotal(value: number): StatsResultApp;

  getInstallsPerDayMap(): jspb.Map<string, number>;
  clearInstallsPerDayMap(): StatsResultApp;

  getInstallsPerCountryMap(): jspb.Map<string, number>;
  clearInstallsPerCountryMap(): StatsResultApp;

  getInstallsLastMonth(): number;
  setInstallsLastMonth(value: number): StatsResultApp;

  getInstallsLast7Days(): number;
  setInstallsLast7Days(value: number): StatsResultApp;

  getId(): string;
  setId(value: string): StatsResultApp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatsResultApp.AsObject;
  static toObject(includeInstance: boolean, msg: StatsResultApp): StatsResultApp.AsObject;
  static serializeBinaryToWriter(message: StatsResultApp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatsResultApp;
  static deserializeBinaryFromReader(message: StatsResultApp, reader: jspb.BinaryReader): StatsResultApp;
}

export namespace StatsResultApp {
  export type AsObject = {
    installsTotal: number,
    installsPerDayMap: Array<[string, number]>,
    installsPerCountryMap: Array<[string, number]>,
    installsLastMonth: number,
    installsLast7Days: number,
    id: string,
  }
}

export class StatsResultCategoryTotals extends jspb.Message {
  getCategory(): string;
  setCategory(value: string): StatsResultCategoryTotals;

  getCount(): number;
  setCount(value: number): StatsResultCategoryTotals;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatsResultCategoryTotals.AsObject;
  static toObject(includeInstance: boolean, msg: StatsResultCategoryTotals): StatsResultCategoryTotals.AsObject;
  static serializeBinaryToWriter(message: StatsResultCategoryTotals, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatsResultCategoryTotals;
  static deserializeBinaryFromReader(message: StatsResultCategoryTotals, reader: jspb.BinaryReader): StatsResultCategoryTotals;
}

export namespace StatsResultCategoryTotals {
  export type AsObject = {
    category: string,
    count: number,
  }
}

export class Bundle extends jspb.Message {
  getValue(): string;
  setValue(value: string): Bundle;

  getType(): string;
  setType(value: string): Bundle;

  getRuntime(): string;
  setRuntime(value: string): Bundle;

  getSdk(): string;
  setSdk(value: string): Bundle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bundle.AsObject;
  static toObject(includeInstance: boolean, msg: Bundle): Bundle.AsObject;
  static serializeBinaryToWriter(message: Bundle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bundle;
  static deserializeBinaryFromReader(message: Bundle, reader: jspb.BinaryReader): Bundle;
}

export namespace Bundle {
  export type AsObject = {
    value: string,
    type: string,
    runtime: string,
    sdk: string,
  }
}

export class Release extends jspb.Message {
  getTimestamp(): string;
  setTimestamp(value: string): Release;

  getVersion(): string;
  setVersion(value: string): Release;

  getDate(): string;
  setDate(value: string): Release;

  getType(): string;
  setType(value: string): Release;

  getUrgency(): string;
  setUrgency(value: string): Release;

  getDescription(): string;
  setDescription(value: string): Release;

  getUrl(): string;
  setUrl(value: string): Release;

  getDateEol(): string;
  setDateEol(value: string): Release;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Release.AsObject;
  static toObject(includeInstance: boolean, msg: Release): Release.AsObject;
  static serializeBinaryToWriter(message: Release, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Release;
  static deserializeBinaryFromReader(message: Release, reader: jspb.BinaryReader): Release;
}

export namespace Release {
  export type AsObject = {
    timestamp: string,
    version: string,
    date: string,
    type: string,
    urgency: string,
    description: string,
    url: string,
    dateEol: string,
  }
}

export class ContentRating extends jspb.Message {
  getType(): string;
  setType(value: string): ContentRating;

  getViolenceCartoon(): string;
  setViolenceCartoon(value: string): ContentRating;

  getViolenceFantasy(): string;
  setViolenceFantasy(value: string): ContentRating;

  getViolenceRealistic(): string;
  setViolenceRealistic(value: string): ContentRating;

  getViolenceBloodshed(): string;
  setViolenceBloodshed(value: string): ContentRating;

  getViolenceSexual(): string;
  setViolenceSexual(value: string): ContentRating;

  getViolenceDesecration(): string;
  setViolenceDesecration(value: string): ContentRating;

  getViolenceSlavery(): string;
  setViolenceSlavery(value: string): ContentRating;

  getViolenceWorship(): string;
  setViolenceWorship(value: string): ContentRating;

  getDrugsAlcohol(): string;
  setDrugsAlcohol(value: string): ContentRating;

  getDrugsNarcotics(): string;
  setDrugsNarcotics(value: string): ContentRating;

  getDrugsTobacco(): string;
  setDrugsTobacco(value: string): ContentRating;

  getSexNudity(): string;
  setSexNudity(value: string): ContentRating;

  getSexThemes(): string;
  setSexThemes(value: string): ContentRating;

  getSexHomosexuality(): string;
  setSexHomosexuality(value: string): ContentRating;

  getSexProstitution(): string;
  setSexProstitution(value: string): ContentRating;

  getSexAdultery(): string;
  setSexAdultery(value: string): ContentRating;

  getSexAppearance(): string;
  setSexAppearance(value: string): ContentRating;

  getLanguageProfanity(): string;
  setLanguageProfanity(value: string): ContentRating;

  getLanguageHumor(): string;
  setLanguageHumor(value: string): ContentRating;

  getLanguageDiscrimination(): string;
  setLanguageDiscrimination(value: string): ContentRating;

  getSocialChat(): string;
  setSocialChat(value: string): ContentRating;

  getSocialInfo(): string;
  setSocialInfo(value: string): ContentRating;

  getSocialAudio(): string;
  setSocialAudio(value: string): ContentRating;

  getSocialLocation(): string;
  setSocialLocation(value: string): ContentRating;

  getSocialContacts(): string;
  setSocialContacts(value: string): ContentRating;

  getMoneyPurchasing(): string;
  setMoneyPurchasing(value: string): ContentRating;

  getMoneyGambling(): string;
  setMoneyGambling(value: string): ContentRating;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentRating.AsObject;
  static toObject(includeInstance: boolean, msg: ContentRating): ContentRating.AsObject;
  static serializeBinaryToWriter(message: ContentRating, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentRating;
  static deserializeBinaryFromReader(message: ContentRating, reader: jspb.BinaryReader): ContentRating;
}

export namespace ContentRating {
  export type AsObject = {
    type: string,
    violenceCartoon: string,
    violenceFantasy: string,
    violenceRealistic: string,
    violenceBloodshed: string,
    violenceSexual: string,
    violenceDesecration: string,
    violenceSlavery: string,
    violenceWorship: string,
    drugsAlcohol: string,
    drugsNarcotics: string,
    drugsTobacco: string,
    sexNudity: string,
    sexThemes: string,
    sexHomosexuality: string,
    sexProstitution: string,
    sexAdultery: string,
    sexAppearance: string,
    languageProfanity: string,
    languageHumor: string,
    languageDiscrimination: string,
    socialChat: string,
    socialInfo: string,
    socialAudio: string,
    socialLocation: string,
    socialContacts: string,
    moneyPurchasing: string,
    moneyGambling: string,
  }
}

export class Urls extends jspb.Message {
  getBugtracker(): string;
  setBugtracker(value: string): Urls;

  getHomepage(): string;
  setHomepage(value: string): Urls;

  getHelp(): string;
  setHelp(value: string): Urls;

  getDonation(): string;
  setDonation(value: string): Urls;

  getTranslate(): string;
  setTranslate(value: string): Urls;

  getFaq(): string;
  setFaq(value: string): Urls;

  getContact(): string;
  setContact(value: string): Urls;

  getVcsBrowser(): string;
  setVcsBrowser(value: string): Urls;

  getContribute(): string;
  setContribute(value: string): Urls;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Urls.AsObject;
  static toObject(includeInstance: boolean, msg: Urls): Urls.AsObject;
  static serializeBinaryToWriter(message: Urls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Urls;
  static deserializeBinaryFromReader(message: Urls, reader: jspb.BinaryReader): Urls;
}

export namespace Urls {
  export type AsObject = {
    bugtracker: string,
    homepage: string,
    help: string,
    donation: string,
    translate: string,
    faq: string,
    contact: string,
    vcsBrowser: string,
    contribute: string,
  }
}

export class Icon extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): Icon;

  getWidth(): number;
  setWidth(value: number): Icon;

  getHeight(): number;
  setHeight(value: number): Icon;

  getScale(): number;
  setScale(value: number): Icon;

  getType(): string;
  setType(value: string): Icon;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Icon.AsObject;
  static toObject(includeInstance: boolean, msg: Icon): Icon.AsObject;
  static serializeBinaryToWriter(message: Icon, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Icon;
  static deserializeBinaryFromReader(message: Icon, reader: jspb.BinaryReader): Icon;
}

export namespace Icon {
  export type AsObject = {
    url: string,
    width: number,
    height: number,
    scale: number,
    type: string,
  }
}

export class ScreenshotSize extends jspb.Message {
  getWidth(): string;
  setWidth(value: string): ScreenshotSize;

  getHeight(): string;
  setHeight(value: string): ScreenshotSize;

  getScale(): string;
  setScale(value: string): ScreenshotSize;

  getSrc(): string;
  setSrc(value: string): ScreenshotSize;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScreenshotSize.AsObject;
  static toObject(includeInstance: boolean, msg: ScreenshotSize): ScreenshotSize.AsObject;
  static serializeBinaryToWriter(message: ScreenshotSize, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScreenshotSize;
  static deserializeBinaryFromReader(message: ScreenshotSize, reader: jspb.BinaryReader): ScreenshotSize;
}

export namespace ScreenshotSize {
  export type AsObject = {
    width: string,
    height: string,
    scale: string,
    src: string,
  }
}

export class Screenshot extends jspb.Message {
  getSizesList(): Array<ScreenshotSize>;
  setSizesList(value: Array<ScreenshotSize>): Screenshot;
  clearSizesList(): Screenshot;
  addSizes(value?: ScreenshotSize, index?: number): ScreenshotSize;

  getCaption(): string;
  setCaption(value: string): Screenshot;

  getDefault(): boolean;
  setDefault(value: boolean): Screenshot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Screenshot.AsObject;
  static toObject(includeInstance: boolean, msg: Screenshot): Screenshot.AsObject;
  static serializeBinaryToWriter(message: Screenshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Screenshot;
  static deserializeBinaryFromReader(message: Screenshot, reader: jspb.BinaryReader): Screenshot;
}

export namespace Screenshot {
  export type AsObject = {
    sizesList: Array<ScreenshotSize.AsObject>,
    caption: string,
    pb_default: boolean,
  }
}

export class Provides extends jspb.Message {
  getValue(): string;
  setValue(value: string): Provides;

  getType(): string;
  setType(value: string): Provides;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Provides.AsObject;
  static toObject(includeInstance: boolean, msg: Provides): Provides.AsObject;
  static serializeBinaryToWriter(message: Provides, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Provides;
  static deserializeBinaryFromReader(message: Provides, reader: jspb.BinaryReader): Provides;
}

export namespace Provides {
  export type AsObject = {
    value: string,
    type: string,
  }
}

export class Launchable extends jspb.Message {
  getValue(): string;
  setValue(value: string): Launchable;

  getType(): string;
  setType(value: string): Launchable;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Launchable.AsObject;
  static toObject(includeInstance: boolean, msg: Launchable): Launchable.AsObject;
  static serializeBinaryToWriter(message: Launchable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Launchable;
  static deserializeBinaryFromReader(message: Launchable, reader: jspb.BinaryReader): Launchable;
}

export namespace Launchable {
  export type AsObject = {
    value: string,
    type: string,
  }
}

export class Translation extends jspb.Message {
  getValue(): string;
  setValue(value: string): Translation;

  getType(): string;
  setType(value: string): Translation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Translation.AsObject;
  static toObject(includeInstance: boolean, msg: Translation): Translation.AsObject;
  static serializeBinaryToWriter(message: Translation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Translation;
  static deserializeBinaryFromReader(message: Translation, reader: jspb.BinaryReader): Translation;
}

export namespace Translation {
  export type AsObject = {
    value: string,
    type: string,
  }
}

export class Metadata extends jspb.Message {
  getFlathubManifest(): string;
  setFlathubManifest(value: string): Metadata;

  getFlathubVerificationVerified(): boolean;
  setFlathubVerificationVerified(value: boolean): Metadata;

  getFlathubVerificationMethod(): string;
  setFlathubVerificationMethod(value: string): Metadata;

  getFlathubVerificationLoginName(): string;
  setFlathubVerificationLoginName(value: string): Metadata;

  getFlathubVerificationLoginProvider(): string;
  setFlathubVerificationLoginProvider(value: string): Metadata;

  getFlathubVerificationWebsite(): string;
  setFlathubVerificationWebsite(value: string): Metadata;

  getFlathubVerificationTimestamp(): string;
  setFlathubVerificationTimestamp(value: string): Metadata;

  getFlathubVerificationLoginIsOrganization(): boolean;
  setFlathubVerificationLoginIsOrganization(value: boolean): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
  static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metadata;
  static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
  export type AsObject = {
    flathubManifest: string,
    flathubVerificationVerified: boolean,
    flathubVerificationMethod: string,
    flathubVerificationLoginName: string,
    flathubVerificationLoginProvider: string,
    flathubVerificationWebsite: string,
    flathubVerificationTimestamp: string,
    flathubVerificationLoginIsOrganization: boolean,
  }
}

export class Branding extends jspb.Message {
  getValue(): string;
  setValue(value: string): Branding;

  getSchemePreference(): string;
  setSchemePreference(value: string): Branding;

  getType(): string;
  setType(value: string): Branding;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Branding.AsObject;
  static toObject(includeInstance: boolean, msg: Branding): Branding.AsObject;
  static serializeBinaryToWriter(message: Branding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Branding;
  static deserializeBinaryFromReader(message: Branding, reader: jspb.BinaryReader): Branding;
}

export namespace Branding {
  export type AsObject = {
    value: string,
    schemePreference: string,
    type: string,
  }
}

export class AddonAppstream extends jspb.Message {
  getType(): string;
  setType(value: string): AddonAppstream;

  getId(): string;
  setId(value: string): AddonAppstream;

  getName(): string;
  setName(value: string): AddonAppstream;

  getSummary(): string;
  setSummary(value: string): AddonAppstream;

  getReleasesList(): Array<Release>;
  setReleasesList(value: Array<Release>): AddonAppstream;
  clearReleasesList(): AddonAppstream;
  addReleases(value?: Release, index?: number): Release;

  getContentRating(): ContentRating | undefined;
  setContentRating(value?: ContentRating): AddonAppstream;
  hasContentRating(): boolean;
  clearContentRating(): AddonAppstream;

  getUrls(): Urls | undefined;
  setUrls(value?: Urls): AddonAppstream;
  hasUrls(): boolean;
  clearUrls(): AddonAppstream;

  getCategoriesList(): Array<string>;
  setCategoriesList(value: Array<string>): AddonAppstream;
  clearCategoriesList(): AddonAppstream;
  addCategories(value: string, index?: number): AddonAppstream;

  getIcon(): string;
  setIcon(value: string): AddonAppstream;

  getIconsList(): Array<Icon>;
  setIconsList(value: Array<Icon>): AddonAppstream;
  clearIconsList(): AddonAppstream;
  addIcons(value?: Icon, index?: number): Icon;

  getDeveloperName(): string;
  setDeveloperName(value: string): AddonAppstream;

  getProjectLicense(): string;
  setProjectLicense(value: string): AddonAppstream;

  getExtends(): string;
  setExtends(value: string): AddonAppstream;

  getBundle(): Bundle | undefined;
  setBundle(value?: Bundle): AddonAppstream;
  hasBundle(): boolean;
  clearBundle(): AddonAppstream;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): AddonAppstream;
  hasMetadata(): boolean;
  clearMetadata(): AddonAppstream;

  getIsMobileFriendly(): boolean;
  setIsMobileFriendly(value: boolean): AddonAppstream;

  getIsFreeLicense(): boolean;
  setIsFreeLicense(value: boolean): AddonAppstream;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddonAppstream.AsObject;
  static toObject(includeInstance: boolean, msg: AddonAppstream): AddonAppstream.AsObject;
  static serializeBinaryToWriter(message: AddonAppstream, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddonAppstream;
  static deserializeBinaryFromReader(message: AddonAppstream, reader: jspb.BinaryReader): AddonAppstream;
}

export namespace AddonAppstream {
  export type AsObject = {
    type: string,
    id: string,
    name: string,
    summary: string,
    releasesList: Array<Release.AsObject>,
    contentRating?: ContentRating.AsObject,
    urls?: Urls.AsObject,
    categoriesList: Array<string>,
    icon: string,
    iconsList: Array<Icon.AsObject>,
    developerName: string,
    projectLicense: string,
    pb_extends: string,
    bundle?: Bundle.AsObject,
    metadata?: Metadata.AsObject,
    isMobileFriendly: boolean,
    isFreeLicense: boolean,
  }
}

export class LocalizationAppstream extends jspb.Message {
  getType(): string;
  setType(value: string): LocalizationAppstream;

  getId(): string;
  setId(value: string): LocalizationAppstream;

  getName(): string;
  setName(value: string): LocalizationAppstream;

  getSummary(): string;
  setSummary(value: string): LocalizationAppstream;

  getReleasesList(): Array<Release>;
  setReleasesList(value: Array<Release>): LocalizationAppstream;
  clearReleasesList(): LocalizationAppstream;
  addReleases(value?: Release, index?: number): Release;

  getUrls(): Urls | undefined;
  setUrls(value?: Urls): LocalizationAppstream;
  hasUrls(): boolean;
  clearUrls(): LocalizationAppstream;

  getCategoriesList(): Array<string>;
  setCategoriesList(value: Array<string>): LocalizationAppstream;
  clearCategoriesList(): LocalizationAppstream;
  addCategories(value: string, index?: number): LocalizationAppstream;

  getIcon(): string;
  setIcon(value: string): LocalizationAppstream;

  getIconsList(): Array<Icon>;
  setIconsList(value: Array<Icon>): LocalizationAppstream;
  clearIconsList(): LocalizationAppstream;
  addIcons(value?: Icon, index?: number): Icon;

  getDeveloperName(): string;
  setDeveloperName(value: string): LocalizationAppstream;

  getProjectLicense(): string;
  setProjectLicense(value: string): LocalizationAppstream;

  getBundle(): Bundle | undefined;
  setBundle(value?: Bundle): LocalizationAppstream;
  hasBundle(): boolean;
  clearBundle(): LocalizationAppstream;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): LocalizationAppstream;
  hasMetadata(): boolean;
  clearMetadata(): LocalizationAppstream;

  getIsMobileFriendly(): boolean;
  setIsMobileFriendly(value: boolean): LocalizationAppstream;

  getIsFreeLicense(): boolean;
  setIsFreeLicense(value: boolean): LocalizationAppstream;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalizationAppstream.AsObject;
  static toObject(includeInstance: boolean, msg: LocalizationAppstream): LocalizationAppstream.AsObject;
  static serializeBinaryToWriter(message: LocalizationAppstream, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalizationAppstream;
  static deserializeBinaryFromReader(message: LocalizationAppstream, reader: jspb.BinaryReader): LocalizationAppstream;
}

export namespace LocalizationAppstream {
  export type AsObject = {
    type: string,
    id: string,
    name: string,
    summary: string,
    releasesList: Array<Release.AsObject>,
    urls?: Urls.AsObject,
    categoriesList: Array<string>,
    icon: string,
    iconsList: Array<Icon.AsObject>,
    developerName: string,
    projectLicense: string,
    bundle?: Bundle.AsObject,
    metadata?: Metadata.AsObject,
    isMobileFriendly: boolean,
    isFreeLicense: boolean,
  }
}

export class GenericAppstream extends jspb.Message {
  getType(): string;
  setType(value: string): GenericAppstream;

  getId(): string;
  setId(value: string): GenericAppstream;

  getName(): string;
  setName(value: string): GenericAppstream;

  getSummary(): string;
  setSummary(value: string): GenericAppstream;

  getReleasesList(): Array<Release>;
  setReleasesList(value: Array<Release>): GenericAppstream;
  clearReleasesList(): GenericAppstream;
  addReleases(value?: Release, index?: number): Release;

  getUrls(): Urls | undefined;
  setUrls(value?: Urls): GenericAppstream;
  hasUrls(): boolean;
  clearUrls(): GenericAppstream;

  getCategoriesList(): Array<string>;
  setCategoriesList(value: Array<string>): GenericAppstream;
  clearCategoriesList(): GenericAppstream;
  addCategories(value: string, index?: number): GenericAppstream;

  getIcon(): string;
  setIcon(value: string): GenericAppstream;

  getIconsList(): Array<Icon>;
  setIconsList(value: Array<Icon>): GenericAppstream;
  clearIconsList(): GenericAppstream;
  addIcons(value?: Icon, index?: number): Icon;

  getDeveloperName(): string;
  setDeveloperName(value: string): GenericAppstream;

  getProjectLicense(): string;
  setProjectLicense(value: string): GenericAppstream;

  getBundle(): Bundle | undefined;
  setBundle(value?: Bundle): GenericAppstream;
  hasBundle(): boolean;
  clearBundle(): GenericAppstream;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): GenericAppstream;
  hasMetadata(): boolean;
  clearMetadata(): GenericAppstream;

  getIsMobileFriendly(): boolean;
  setIsMobileFriendly(value: boolean): GenericAppstream;

  getIsFreeLicense(): boolean;
  setIsFreeLicense(value: boolean): GenericAppstream;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenericAppstream.AsObject;
  static toObject(includeInstance: boolean, msg: GenericAppstream): GenericAppstream.AsObject;
  static serializeBinaryToWriter(message: GenericAppstream, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenericAppstream;
  static deserializeBinaryFromReader(message: GenericAppstream, reader: jspb.BinaryReader): GenericAppstream;
}

export namespace GenericAppstream {
  export type AsObject = {
    type: string,
    id: string,
    name: string,
    summary: string,
    releasesList: Array<Release.AsObject>,
    urls?: Urls.AsObject,
    categoriesList: Array<string>,
    icon: string,
    iconsList: Array<Icon.AsObject>,
    developerName: string,
    projectLicense: string,
    bundle?: Bundle.AsObject,
    metadata?: Metadata.AsObject,
    isMobileFriendly: boolean,
    isFreeLicense: boolean,
  }
}

export class RuntimeAppstream extends jspb.Message {
  getType(): string;
  setType(value: string): RuntimeAppstream;

  getId(): string;
  setId(value: string): RuntimeAppstream;

  getName(): string;
  setName(value: string): RuntimeAppstream;

  getSummary(): string;
  setSummary(value: string): RuntimeAppstream;

  getDescription(): string;
  setDescription(value: string): RuntimeAppstream;

  getReleasesList(): Array<Release>;
  setReleasesList(value: Array<Release>): RuntimeAppstream;
  clearReleasesList(): RuntimeAppstream;
  addReleases(value?: Release, index?: number): Release;

  getUrls(): Urls | undefined;
  setUrls(value?: Urls): RuntimeAppstream;
  hasUrls(): boolean;
  clearUrls(): RuntimeAppstream;

  getCategoriesList(): Array<string>;
  setCategoriesList(value: Array<string>): RuntimeAppstream;
  clearCategoriesList(): RuntimeAppstream;
  addCategories(value: string, index?: number): RuntimeAppstream;

  getIcon(): string;
  setIcon(value: string): RuntimeAppstream;

  getIconsList(): Array<Icon>;
  setIconsList(value: Array<Icon>): RuntimeAppstream;
  clearIconsList(): RuntimeAppstream;
  addIcons(value?: Icon, index?: number): Icon;

  getDeveloperName(): string;
  setDeveloperName(value: string): RuntimeAppstream;

  getProjectLicense(): string;
  setProjectLicense(value: string): RuntimeAppstream;

  getBundle(): Bundle | undefined;
  setBundle(value?: Bundle): RuntimeAppstream;
  hasBundle(): boolean;
  clearBundle(): RuntimeAppstream;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): RuntimeAppstream;
  hasMetadata(): boolean;
  clearMetadata(): RuntimeAppstream;

  getIsMobileFriendly(): boolean;
  setIsMobileFriendly(value: boolean): RuntimeAppstream;

  getIsFreeLicense(): boolean;
  setIsFreeLicense(value: boolean): RuntimeAppstream;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RuntimeAppstream.AsObject;
  static toObject(includeInstance: boolean, msg: RuntimeAppstream): RuntimeAppstream.AsObject;
  static serializeBinaryToWriter(message: RuntimeAppstream, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RuntimeAppstream;
  static deserializeBinaryFromReader(message: RuntimeAppstream, reader: jspb.BinaryReader): RuntimeAppstream;
}

export namespace RuntimeAppstream {
  export type AsObject = {
    type: string,
    id: string,
    name: string,
    summary: string,
    description: string,
    releasesList: Array<Release.AsObject>,
    urls?: Urls.AsObject,
    categoriesList: Array<string>,
    icon: string,
    iconsList: Array<Icon.AsObject>,
    developerName: string,
    projectLicense: string,
    bundle?: Bundle.AsObject,
    metadata?: Metadata.AsObject,
    isMobileFriendly: boolean,
    isFreeLicense: boolean,
  }
}

export class SummaryMetadata extends jspb.Message {
  getName(): string;
  setName(value: string): SummaryMetadata;

  getRuntime(): string;
  setRuntime(value: string): SummaryMetadata;

  getSdk(): string;
  setSdk(value: string): SummaryMetadata;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): SummaryMetadata;
  clearTagsList(): SummaryMetadata;
  addTags(value: string, index?: number): SummaryMetadata;

  getCommand(): string;
  setCommand(value: string): SummaryMetadata;

  getPermissions(): SummaryPermissions | undefined;
  setPermissions(value?: SummaryPermissions): SummaryMetadata;
  hasPermissions(): boolean;
  clearPermissions(): SummaryMetadata;

  getExtensionsMap(): jspb.Map<string, SummaryExtension>;
  clearExtensionsMap(): SummaryMetadata;

  getBuiltExtensionsList(): Array<string>;
  setBuiltExtensionsList(value: Array<string>): SummaryMetadata;
  clearBuiltExtensionsList(): SummaryMetadata;
  addBuiltExtensions(value: string, index?: number): SummaryMetadata;

  getExtraData(): SummaryExtraData | undefined;
  setExtraData(value?: SummaryExtraData): SummaryMetadata;
  hasExtraData(): boolean;
  clearExtraData(): SummaryMetadata;

  getRuntimeIsEol(): boolean;
  setRuntimeIsEol(value: boolean): SummaryMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SummaryMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: SummaryMetadata): SummaryMetadata.AsObject;
  static serializeBinaryToWriter(message: SummaryMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SummaryMetadata;
  static deserializeBinaryFromReader(message: SummaryMetadata, reader: jspb.BinaryReader): SummaryMetadata;
}

export namespace SummaryMetadata {
  export type AsObject = {
    name: string,
    runtime: string,
    sdk: string,
    tagsList: Array<string>,
    command: string,
    permissions?: SummaryPermissions.AsObject,
    extensionsMap: Array<[string, SummaryExtension.AsObject]>,
    builtExtensionsList: Array<string>,
    extraData?: SummaryExtraData.AsObject,
    runtimeIsEol: boolean,
  }
}

export class SummaryPermissions extends jspb.Message {
  getSharedList(): Array<string>;
  setSharedList(value: Array<string>): SummaryPermissions;
  clearSharedList(): SummaryPermissions;
  addShared(value: string, index?: number): SummaryPermissions;

  getSocketsList(): Array<string>;
  setSocketsList(value: Array<string>): SummaryPermissions;
  clearSocketsList(): SummaryPermissions;
  addSockets(value: string, index?: number): SummaryPermissions;

  getDevicesList(): Array<string>;
  setDevicesList(value: Array<string>): SummaryPermissions;
  clearDevicesList(): SummaryPermissions;
  addDevices(value: string, index?: number): SummaryPermissions;

  getFilesystemsList(): Array<string>;
  setFilesystemsList(value: Array<string>): SummaryPermissions;
  clearFilesystemsList(): SummaryPermissions;
  addFilesystems(value: string, index?: number): SummaryPermissions;

  getSessionBusMap(): jspb.Map<string, StringArray>;
  clearSessionBusMap(): SummaryPermissions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SummaryPermissions.AsObject;
  static toObject(includeInstance: boolean, msg: SummaryPermissions): SummaryPermissions.AsObject;
  static serializeBinaryToWriter(message: SummaryPermissions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SummaryPermissions;
  static deserializeBinaryFromReader(message: SummaryPermissions, reader: jspb.BinaryReader): SummaryPermissions;
}

export namespace SummaryPermissions {
  export type AsObject = {
    sharedList: Array<string>,
    socketsList: Array<string>,
    devicesList: Array<string>,
    filesystemsList: Array<string>,
    sessionBusMap: Array<[string, StringArray.AsObject]>,
  }
}

export class SummaryExtension extends jspb.Message {
  getDirectory(): string;
  setDirectory(value: string): SummaryExtension;

  getAutodelete(): string;
  setAutodelete(value: string): SummaryExtension;

  getNoAutodownload(): string;
  setNoAutodownload(value: string): SummaryExtension;

  getVersion(): string;
  setVersion(value: string): SummaryExtension;

  getVersions(): string;
  setVersions(value: string): SummaryExtension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SummaryExtension.AsObject;
  static toObject(includeInstance: boolean, msg: SummaryExtension): SummaryExtension.AsObject;
  static serializeBinaryToWriter(message: SummaryExtension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SummaryExtension;
  static deserializeBinaryFromReader(message: SummaryExtension, reader: jspb.BinaryReader): SummaryExtension;
}

export namespace SummaryExtension {
  export type AsObject = {
    directory: string,
    autodelete: string,
    noAutodownload: string,
    version: string,
    versions: string,
  }
}

export class SummaryExtraData extends jspb.Message {
  getName(): string;
  setName(value: string): SummaryExtraData;

  getChecksum(): string;
  setChecksum(value: string): SummaryExtraData;

  getSize(): string;
  setSize(value: string): SummaryExtraData;

  getUri(): string;
  setUri(value: string): SummaryExtraData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SummaryExtraData.AsObject;
  static toObject(includeInstance: boolean, msg: SummaryExtraData): SummaryExtraData.AsObject;
  static serializeBinaryToWriter(message: SummaryExtraData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SummaryExtraData;
  static deserializeBinaryFromReader(message: SummaryExtraData, reader: jspb.BinaryReader): SummaryExtraData;
}

export namespace SummaryExtraData {
  export type AsObject = {
    name: string,
    checksum: string,
    size: string,
    uri: string,
  }
}

