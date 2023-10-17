import Nav from '@/components/Nav'
import { SignInForm } from '@/components/SignInForm'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'

export default function Home() {
  return (
    <main className="p-24">
  <Nav/>
  <section className='py-12 flex flex-col items-center text-center gap-8'>
        <h1 className='text-4xl font-bold'>Shantah</h1>
        <p className='text-2xl text-muted-foreground'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam assumenda autem et consequatur minima ex earum saepe expedita neque reiciendis, error eius voluptate dignissimos porro eligendi rem alias quidem dolor!</p>
  </section>
  <div className='flex gap-6 items-center justify-center'>
    <Button variant={"secondary"}> 
      Learn More
    </Button>
        <Button>
          Enroll Now
        </Button>
  </div>
  <SignInForm/>
    </main>
  )
}
