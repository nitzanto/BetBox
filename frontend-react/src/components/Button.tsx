//Controller is child of Controller

type Props = {
    runFunction: any;
}

function Button({ runFunction }: Props) {
  return (
    //Placing the button in the center and styling it
    //Adding fade for hovering the button too
    //Gets the handleBetFunc from parent
    <button onClick={runFunction} className="transition-all duration-300 border w-full hover:bg-indigo-600 border-gray-200 px-4 py-12 rounded-xl bg-indigo-500 text-white text-2xl" >Place Bet</button>
  )
}

export default Button