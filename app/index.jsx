import { StatusBar } from "expo-status-bar";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const index = () => {
  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image
        className="absolute h-full w-full"
        source={require("../assets/images/background.png")}
      />

      {/* Lights */}
      <View className="w-full absolute flex-row justify-around">
        <Image
          className="h-[225] w-[90]"
          source={require("../assets/images/light.png")}
        />
        <Image
          className="h-[160] w-[65]"
          source={require("../assets/images/light.png")}
        />
      </View>

      {/* Title And Form */}
      <View className="w-full h-full flex pt-40  justify-around">
        {/* Title */}
        <View className="flex items-center">
          <Text className="text-white text-5xl font-bold tracking-wider">Login</Text>
        </View>
        {/* Form */}
        <View className="flex space-y-4 mx-4 items-center">
            <View className="w-full bg-black/5 p-3 rounded-2xl mb-4">
                <TextInput placeholder="Email" placeholderTextColor={'gray'}/>
            </View>
            <View className="w-full bg-black/5 p-3 rounded-2xl mb-6">
                <TextInput placeholder="Password" secureTextEntry={true} placeholderTextColor={'gray'}/>
            </View>

            {/* Button */}
            <View className="w-full">
                <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl items-center">
                   <Text className="text-white font-bold text-center text-xl">
                      Login
                   </Text>
                </TouchableOpacity>
            </View>

            <View className="flex-row  justify-center mt-3">
                <Text className="">
                    Don't have an account?  
                </Text>
                
                <TouchableOpacity ><Text className="text-sky-400 font-bold ml-1">Sign Up</Text></TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  );
};

export default index;
