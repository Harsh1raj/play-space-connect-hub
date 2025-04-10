
import React, { useState } from "react";
import { Eye, EyeOff, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");

  return (
    <div className="container max-w-md mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-cricket-green-dark mb-2">CricBuddies</h1>
        <p className="text-gray-600 dark:text-gray-300">Connect with cricket players and turfs</p>
      </div>

      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <h2 className="text-2xl font-bold">Welcome Back</h2>
          <p className="text-gray-500 dark:text-gray-400">Sign in to your account</p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-full inline-flex p-1">
                    <button
                      className={`px-4 py-2 rounded-full text-sm ${
                        loginMethod === "email" 
                          ? "bg-cricket-green-dark text-white" 
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                      onClick={() => setLoginMethod("email")}
                    >
                      Email
                    </button>
                    <button
                      className={`px-4 py-2 rounded-full text-sm ${
                        loginMethod === "phone" 
                          ? "bg-cricket-green-dark text-white" 
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                      onClick={() => setLoginMethod("phone")}
                    >
                      Phone
                    </button>
                  </div>
                </div>

                {loginMethod === "email" ? (
                  <div className="relative mb-4">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="pl-10" 
                    />
                  </div>
                ) : (
                  <div className="relative mb-4">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      className="pl-10" 
                    />
                  </div>
                )}

                <div className="relative mb-1">
                  <Input 
                    type={isPasswordVisible ? "text" : "password"} 
                    placeholder="Enter your password" 
                    className="pr-10" 
                  />
                  <button
                    type="button"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    className="absolute right-3 top-3"
                  >
                    {isPasswordVisible ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                <div className="text-right mb-4">
                  <a href="#" className="text-sm text-cricket-green-dark hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>

              <Button className="w-full bg-cricket-green-dark hover:bg-cricket-green-dark/90 mb-4">
                Sign In
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill="#1877F2"/>
                  </svg>
                  Facebook
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="register">
              <div className="mb-6">
                <div className="relative mb-4">
                  <Input type="text" placeholder="Full Name" />
                </div>
                <div className="relative mb-4">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input type="email" placeholder="Email Address" className="pl-10" />
                </div>
                <div className="relative mb-4">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input type="tel" placeholder="Phone Number" className="pl-10" />
                </div>
                <div className="relative mb-4">
                  <Input 
                    type={isPasswordVisible ? "text" : "password"} 
                    placeholder="Create Password" 
                    className="pr-10" 
                  />
                  <button
                    type="button"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    className="absolute right-3 top-3"
                  >
                    {isPasswordVisible ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                <div className="mb-4 flex items-center">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="h-4 w-4 rounded border-gray-300 text-cricket-green-dark focus:ring-cricket-green-dark" 
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    I agree to the <a href="#" className="text-cricket-green-dark hover:underline">Terms of Service</a> and <a href="#" className="text-cricket-green-dark hover:underline">Privacy Policy</a>
                  </label>
                </div>
              </div>

              <Button className="w-full bg-cricket-green-dark hover:bg-cricket-green-dark/90 mb-4">
                Create Account
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400">
                    Or sign up with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="flex items-center justify-center gap-2">
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
          <a href="#" className="text-cricket-green-dark hover:underline">Terms of Service</a> and <a href="#" className="text-cricket-green-dark hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
