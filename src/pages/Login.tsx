
import React, { useState } from "react";
import { Eye, EyeOff, Mail, Phone, User, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");
  const [userType, setUserType] = useState<"player" | "turfOwner">("player");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="32" fill="#8B5CF6" fillOpacity="0.1"/>
                <circle cx="32" cy="32" r="24" fill="#8B5CF6" fillOpacity="0.2"/>
                <path d="M32 48C40.8366 48 48 40.8366 48 32C48 23.1634 40.8366 16 32 16C23.1634 16 16 23.1634 16 32C16 40.8366 23.1634 48 32 48Z" stroke="#8B5CF6" strokeWidth="2"/>
                <path d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z" fill="#8B5CF6"/>
                <path d="M32 36L38 42M32 36L26 42M32 36V20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-2">CricBuddies</h1>
          <p className="text-gray-600 dark:text-gray-300">Connect with cricket players and turfs</p>
        </div>

        <Card className="shadow-xl border-0 overflow-hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur">
          <div className="absolute w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 top-0"></div>
          <CardHeader className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Welcome to CricBuddies</h2>
            <p className="text-gray-500 dark:text-gray-400">Sign in to connect with cricket lovers</p>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="flex justify-center mb-6">
                <div className="bg-purple-100 dark:bg-gray-700 rounded-full inline-flex p-1 w-full max-w-xs shadow-inner">
                  <button
                    className={`flex-1 px-4 py-2 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                      userType === "player" 
                        ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-md" 
                        : "text-gray-700 dark:text-gray-300 hover:bg-purple-200 dark:hover:bg-gray-600"
                    }`}
                    onClick={() => setUserType("player")}
                  >
                    <User className="h-4 w-4" />
                    Player
                  </button>
                  <button
                    className={`flex-1 px-4 py-2 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                      userType === "turfOwner" 
                        ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-md" 
                        : "text-gray-700 dark:text-gray-300 hover:bg-purple-200 dark:hover:bg-gray-600"
                    }`}
                    onClick={() => setUserType("turfOwner")}
                  >
                    <MapPin className="h-4 w-4" />
                    Turf Owner
                  </button>
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-purple-100 dark:bg-gray-700 p-1 rounded-lg">
                <TabsTrigger 
                  value="login" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-purple-700 data-[state=active]:text-white rounded-md"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger 
                  value="register" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-purple-700 data-[state=active]:text-white rounded-md"
                >
                  Register
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="animate-fade-in">
                <div className="mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="bg-purple-100 dark:bg-gray-700 rounded-full inline-flex p-1 shadow-inner">
                      <button
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          loginMethod === "email" 
                            ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-md" 
                            : "text-gray-700 dark:text-gray-300 hover:bg-purple-200 dark:hover:bg-gray-600"
                        }`}
                        onClick={() => setLoginMethod("email")}
                      >
                        Email
                      </button>
                      <button
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          loginMethod === "phone" 
                            ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-md" 
                            : "text-gray-700 dark:text-gray-300 hover:bg-purple-200 dark:hover:bg-gray-600"
                        }`}
                        onClick={() => setLoginMethod("phone")}
                      >
                        Phone
                      </button>
                    </div>
                  </div>

                  {loginMethod === "email" ? (
                    <div className="relative mb-4 group">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-purple-400 group-focus-within:text-purple-600 transition-colors" />
                      <Input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="pl-10 bg-purple-50 dark:bg-gray-700 border-purple-200 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300" 
                      />
                    </div>
                  ) : (
                    <div className="relative mb-4 group">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-purple-400 group-focus-within:text-purple-600 transition-colors" />
                      <Input 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        className="pl-10 bg-purple-50 dark:bg-gray-700 border-purple-200 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300" 
                      />
                    </div>
                  )}

                  <div className="relative mb-1 group">
                    <Input 
                      type={isPasswordVisible ? "text" : "password"} 
                      placeholder="Enter your password" 
                      className="pr-10 bg-purple-50 dark:bg-gray-700 border-purple-200 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300" 
                    />
                    <button
                      type="button"
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                      className="absolute right-3 top-3 text-purple-400 hover:text-purple-600 transition-colors"
                    >
                      {isPasswordVisible ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <div className="text-right mb-4">
                    <a href="#" className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors">
                      Forgot password?
                    </a>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-md transition-all duration-300 mb-4">
                  Sign In as {userType === "player" ? "Player" : "Turf Owner"}
                </Button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-white dark:bg-gray-800 px-2 text-gray-500 dark:text-gray-400">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="flex items-center justify-center gap-2 border-purple-200 dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-gray-700 transition-all duration-300">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center gap-2 border-purple-200 dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-gray-700 transition-all duration-300">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill="#1877F2"/>
                    </svg>
                    Facebook
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="register" className="animate-fade-in">
                <div className="mb-6">
                  <div className="relative mb-4 group">
                    <User className="absolute left-3 top-3 h-5 w-5 text-purple-400 group-focus-within:text-purple-600 transition-colors" />
                    <Input 
                      type="text" 
                      placeholder="Full Name" 
                      className="pl-10 bg-purple-50 dark:bg-gray-700 border-purple-200 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300" 
                    />
                  </div>
                  <div className="relative mb-4 group">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-purple-400 group-focus-within:text-purple-600 transition-colors" />
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      className="pl-10 bg-purple-50 dark:bg-gray-700 border-purple-200 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300" 
                    />
                  </div>
                  <div className="relative mb-4 group">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-purple-400 group-focus-within:text-purple-600 transition-colors" />
                    <Input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="pl-10 bg-purple-50 dark:bg-gray-700 border-purple-200 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300" 
                    />
                  </div>
                  <div className="relative mb-4 group">
                    <Input 
                      type={isPasswordVisible ? "text" : "password"} 
                      placeholder="Create Password" 
                      className="pr-10 bg-purple-50 dark:bg-gray-700 border-purple-200 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300" 
                    />
                    <button
                      type="button"
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                      className="absolute right-3 top-3 text-purple-400 hover:text-purple-600 transition-colors"
                    >
                      {isPasswordVisible ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <div className="mb-4 flex items-center">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600" 
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                      I agree to the <a href="#" className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors">Terms of Service</a> and <a href="#" className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors">Privacy Policy</a>
                    </label>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-md transition-all duration-300 mb-4">
                  Create {userType === "player" ? "Player" : "Turf Owner"} Account
                </Button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-white dark:bg-gray-800 px-2 text-gray-500 dark:text-gray-400">
                      Or sign up with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="flex items-center justify-center gap-2 border-purple-200 dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-gray-700 transition-all duration-300">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center gap-2 border-purple-200 dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-gray-700 transition-all duration-300">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill="#1877F2"/>
                    </svg>
                    Facebook
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            By signing in or creating an account, you agree to our <br />
            <a href="#" className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors">Terms of Service</a> and <a href="#" className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
