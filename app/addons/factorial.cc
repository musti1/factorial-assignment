#include <node.h>
#include <math.h>

namespace demo {

    using v8::Exception;
    using v8::FunctionCallbackInfo;
    using v8::Isolate;
    using v8::Local;
    using v8::NewStringType;
    using v8::Number;
    using v8::Object;
    using v8::String;
    using v8::Value;

    void Factorial(const FunctionCallbackInfo<Value>& args) {
      Isolate* isolate = args.GetIsolate();

      if (args.Length() < 1) {
        isolate->ThrowException(Exception::TypeError(
            String::NewFromUtf8(isolate,
                                "Wrong number of arguments",
                                NewStringType::kNormal).ToLocalChecked()));
        return;
      }

      if (!args[0]->IsNumber()) {
        isolate->ThrowException(Exception::TypeError(
            String::NewFromUtf8(isolate,
                                "Wrong arguments",
                                NewStringType::kNormal).ToLocalChecked()));
        return;
      }

      int value = args[0].As<Number>()->Value();
      long double factorial = 1;
      for(int i = 1; i <= value; i++){
         factorial *= i;
      }
      Local<Number> num = Number::New(isolate, factorial);

      // Set the return value (using the passed in
      // FunctionCallbackInfo<Value>&)
      args.GetReturnValue().Set(num);
    }

    void Init(Local<Object> exports) {
      NODE_SET_METHOD(exports, "factorial", Factorial);
    }

    NODE_MODULE(NODE_GYP_MODULE_NAME, Init)

}

