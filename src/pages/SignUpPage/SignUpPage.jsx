import SignUpForm from '../../components/SignUpForm/SignUpForm'

export default function SignUpPage({ setUser }) {
    console.log('SignUpPage is rendered');
    return (
    <div>
<h1 className='mt-5 text-themeOrange bg-themeNavyBlue h-[60px] flex items-center justify-center'>Sign Up</h1>
        <SignUpForm setUser={setUser} />
    </div>
  );
}