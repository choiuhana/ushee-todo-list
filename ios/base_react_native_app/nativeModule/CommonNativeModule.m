#import "CommonNativeModule.h"
#import <Foundation/Foundation.h>

//string (NSString)
//number (NSInteger, float, double, CGFloat, NSNumber)
//boolean (BOOL, NSNumber)
//array (NSArray) of any types from this list
//object (NSDictionary) with string keys and values of any type from this list
//function (RCTResponseSenderBlock)
@implementation CommonNativeModule

RCT_EXPORT_MODULE();

+(BOOL)requiresMainQueueSetup {
  return NO;
}

-(NSDictionary *)constantsToExport{
  return @{
    @"DEBUG" : @([self isDebug]),
    @"DEVELOPMENT" : @([self isDevelopment]),

    // from Info.plist
    @"BUILD_TYPE" : [[NSBundle mainBundle] objectForInfoDictionaryKey:@"BUILD_TYPE_NAME"],
    @"BUILD_TYPE_DEBUG" : @"debug",
    @"BUILD_TYPE_RELEASE" : @"release",

    // from Info.plist
    @"BUILD_CONFIG" : [[NSBundle mainBundle] objectForInfoDictionaryKey:@"BUILD_CONFIG_NAME"],
    @"BUILD_CONFIG_DEVELOPMENT" : @"development",
    @"BUILD_CONFIG_PRODUCTION" : @"production",
  };
}

-(BOOL) isDebug {
#ifdef DEBUG
  return YES;
#else
  return NO;
#endif
}

-(BOOL) isDevelopment {
  return [[[NSBundle mainBundle] objectForInfoDictionaryKey:@"BUILD_CONFIG_NAME"] isEqualToString:@"development"];
}

// project's Build must be code(integer)
-(int) getApplicationVersionCode {
  @try {
    return [[[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleVersion"] intValue];
  } @catch(NSException *e){
    return 1;
  }
}

-(NSString*) getApplicationVersionName {
  return [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"];
}

-(NSDictionary*) getApplicationVersion {
  return @{
    @"code" : @([self getApplicationVersionCode]),
    @"name" : [self getApplicationVersionName]
  };
}

RCT_EXPORT_METHOD(getApplicationVersion:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  resolve(self.getApplicationVersion);
}

RCT_EXPORT_METHOD(exitApplication){
  exit(0);
}

@end
