import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import CustomInput from '@/components/CustomInput'
import CustomButton from '@/components/CustomButton'

const SignUp = () => {
  const [isSumbitting, setIsSubmitting] = useState (false);
  const [form, setForm] = useState({
    name: '', email: '', password: ''})
  const submit = async () => {
    if(!form.name || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    setIsSubmitting(true);
    try {
      // Simulate API call
      Alert.alert('Success', 'You have signed up successfully');
      router.push('/sign-in')
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <View className='gap-10 bg-white rounded-lg p-5 mt-5'>
        <CustomInput  
          placeholder='Enter Your Full Name'
          value={form.name}
          onChangeText={(text) => setForm((prev) => ({...prev, name: text}))}
          label='Name'
        />
        <CustomInput  
          placeholder='Enter Your Email'
          value={form.email}
          onChangeText={(text) => setForm((prev) => ({...prev, email: text}))}
          label='Email'
          keyboardType='email-address'
        />
        <CustomInput  
          placeholder='Enter Your Password'
          value={form.password}
          onChangeText={(text) => setForm((prev) => ({...prev, password: text}))}
          label='Password'
          secureTextEntry={true}
        />
        <CustomButton
          title='Sign Up'
          onPress={submit}
          isLoading={isSumbitting}
        />
        <View className='flex justify-center flex-row gap-2 mt-5'>
          <Text className='base-regular text-gray-100'>
            Already have an account?
          </Text>
          <Link href="/sign-in" className='base-bold text-primary'>
            Sign In
          </Link>
        </View>
    </View>
  )
}

export default SignUp