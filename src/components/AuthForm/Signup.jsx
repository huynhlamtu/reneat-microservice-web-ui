import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useState } from 'react'
import useSignupWithEmailAndPassword from '../../hooks/useSignupWithEmailAndPassword'

const Signup = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    username: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const { loading, signup } = useSignupWithEmailAndPassword()

  return (
    <>
      <Input
        placeholder='Email'
        type='email'
        fontSize={"14"}
        value={inputs.email}
        size={"sm"}
        onChange={(e) => setInputs({...inputs, email: e.target.value})}
      />
      <Input
        placeholder='Username'
        fontSize={"14"}
        value={inputs.username}
        size={"sm"}
        onChange={(e) => setInputs({...inputs, username: e.target.value})}
      />

      <Input
        placeholder='First Name'
        fontSize={"14"}
        value={inputs.first_name}
        size={"sm"}
        onChange={(e) => setInputs({...inputs, first_name: e.target.value})}
      />

      <Input
        placeholder='Last Name'
        fontSize={"14"}
        value={inputs.last_name}
        size={"sm"}
        onChange={(e) => setInputs({...inputs, last_name: e.target.value})}
      />

      <InputGroup>
        <Input
          placeholder='Password'
          type={showPassword ? 'text' : 'password'}
          fontSize={"14"}
          value={inputs.password}
          size={"sm"}
          onChange={(e) => setInputs({...inputs, password: e.target.value})}
        />

        <InputRightElement h={"full"}>
          <Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      
      <Button w={"full"} colorScheme='blue' size={'sm'} fontSize={14}
        isLoading={loading}
        onClick={() => signup(inputs)}
      >
        Sign up
      </Button>
    </>
  )
}

export default Signup