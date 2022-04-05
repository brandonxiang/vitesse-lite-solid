export default function Counter({ initial }: { initial: number }) {
  const [count, setCount] = createSignal(initial ?? 0)

  const increment = () => {
    setCount(count() + 1)
  }

  const decrement = () => {
    setCount(count() - 1)
  }

  return (
    <div>
      {count()}
      <button className="inc" onClick={() => increment()}>
      +
      </button>
      <button className="dec" onClick={() => decrement()}>
      -
      </button>
    </div>
  )
}
