import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDown({setSize, size}) {

  const handleClick = (e) =>{
    setSize(e.target.name)
  }

  return (
    <Menu as="div" className="relative inline-block text-left" >
      <div>
        <Menu.Button className="inline-flex w-[570px] h-14 bg-gray-100 px-4 py-2 text-base items-center text-left font-normal text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" >
          {size == "" ? "Select Size" : size}
          <ChevronDownIcon className="-mr-1 ml-[440px] h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute w-[570px] right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" >
          <div className="py-1">
            <Menu.Item value="Small" name="Small" onClick={handleClick}>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Small
                </a>
              )}
            </Menu.Item>
            <Menu.Item value="Medium" name="Medium" onClick={handleClick}>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Medium
                </a>
              )}
            </Menu.Item>
            <Menu.Item value="Large" name="Large" onClick={handleClick}>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Large
                </a>
              )}
            </Menu.Item>
            <Menu.Item value="Extra Large" name="Extra Large" onClick={handleClick}>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Extra Large
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}