package com.base_react_native_app.nativeModule;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.base_react_native_app.BuildConfig;

import java.util.HashMap;
import java.util.Map;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

public class CommonNativeModule extends ReactContextBaseJavaModule {

    private ReactApplicationContext context;

    public CommonNativeModule(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);
        this.context = reactContext;
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();

        constants.put("DEBUG", BuildConfig.DEBUG);

        constants.put("BUILD_TYPE", BuildConfig.BUILD_TYPE);
        constants.put("BUILD_TYPE_DEBUG", "debug");
        constants.put("BUILD_TYPE_RELEASE", "release");
        constants.put("BUILD_CONFIG", BuildConfig.BUILD_CONFIG);
        constants.put("BUILD_CONFIG_DEVELOPMENT", "development");
        constants.put("BUILD_CONFIG_PRODUCTION", "production");

        return constants;
    }

    @ReactMethod
    public void getApplicationVersion(Promise promise){
        WritableMap map = Arguments.createMap();
        map.putInt("code", BuildConfig.VERSION_CODE);
        map.putString("name", BuildConfig.VERSION_NAME);
        promise.resolve(map);
    }

    @ReactMethod
    public void exitApplication(){
        android.os.Process.killProcess(android.os.Process.myPid());
    }

    @NonNull
    @Override
    public String getName() {
        return "CommonNativeModule";
    }
}
