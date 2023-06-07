import { Welcome } from '../components/Welcome/Welcome'
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle'

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <div className="w-1/3 m-5 mx-auto">
        <h1 className="px-5 font-black text-yellow-600 bg-yellow-200 dark:bg-pink-800 dark:text-yellow-50">
          Mantap pak
        </h1>
      </div>
    </>
  )
}
