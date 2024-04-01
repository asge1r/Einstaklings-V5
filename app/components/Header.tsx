import ColorModeToggle from './ColorModeToggle';
const Header = () => {
  return (
    <header className="bg-white text-black dark:bg-black dark:text-white py-8 border-b">
      <link href="https//localhost:3000" /><h1 className="bg-white text-black dark:bg-black dark:text-white text-xl md:text-2xl lg:text-3xl text-center font-semibold">Ásgeirs Bloggið</h1>
        <ColorModeToggle />

      </header>
  )
}

export default Header