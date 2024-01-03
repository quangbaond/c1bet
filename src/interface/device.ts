export interface IDevice {
  client: IDeviceClient;
  os: IDeviceOs;
  device: IDeviceModel;
}

export interface IDeviceClient {
  type: string;
  name: string;
  version: string;
  engine: string;
  engineVersion: string;
}

export interface IDeviceOs {
  name: string;
  version: string;
  platform: string;
}

export interface IDeviceModel {
  type: string;
  brand: string;
  model: string;
}
