import { NativeModules } from "react-native";

export default class CommonNativeModule {

  /**
   * {bool} {true|false}
   */
  static DEBUG = NativeModules.CommonNativeModule.getConstants().DEBUG;

  /**
   * {bool} {true|false}
   */
  static DEVELOPMENT = NativeModules.CommonNativeModule.getConstants().DEVELOPMENT;

  /**
   * @return {string} "{debug|release}"
   */
  static BUILD_TYPE = NativeModules.CommonNativeModule.getConstants().BUILD_TYPE;

  /**
   * @return {string} "debug"
   */
  static BUILD_TYPE_DEBUG = NativeModules.CommonNativeModule.getConstants().BUILD_TYPE_DEBUG;

  /**
   * @return {string} "release"
   */
  static BUILD_TYPE_RELEASE = NativeModules.CommonNativeModule.getConstants().BUILD_TYPE_RELEASE;

  /**
   * @return {string} "{development|production}"
   */
  static BUILD_CONFIG = NativeModules.CommonNativeModule.getConstants().BUILD_CONFIG;

  /**
   * @return {string} "development"
   */
  static BUILD_CONFIG_DEVELOPMENT = NativeModules.CommonNativeModule.getConstants().BUILD_CONFIG_DEVELOPMENT;

  /**
   * @return {string} "production"
   */
  static BUILD_CONFIG_PRODUCTION = NativeModules.CommonNativeModule.getConstants().BUILD_CONFIG_PRODUCTION;

  /**
   * @returns {async} { code: {versionCode}, name: "{versionName}" }
   */
  static getApplicationVersion = async () => {
    return NativeModules.CommonNativeModule.getApplicationVersion();
  };

  /**
   * exit application
   */
  static exitApplication = () => {
    NativeModules.CommonNativeModule.exitApplication();
  };
}
