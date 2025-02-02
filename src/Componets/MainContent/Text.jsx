import React from 'react'

const textInfo = [
    {
        head: "Chat with Cypher"
    },
    {
        textMe: "Lorem ipsum dolar sit general sac mascho werho"
    },
    {
        textYOU: "Lorem ipsum dolar sit general sac mascho werho"
    },
    {
        textYOU: "Lorem ipsum dolar sit general sac mascho werho"
    },
    {
        textMe: "Lorem ipsum dolar sit general sac mascho werho"
    },
    {
        textYOU: "Enter your question..."
    }
]

function Text() {
  return (
    <>
        <section>
            <div>
                <div>
                    {textInfo.map(({head, textMe, textYOU}) => (
                        <div>
                            <h4>{head}</h4>

                            <p className='bg-black text-white flex justify-end max-w-md'>{textMe}</p>
                            <p className='text-black bg-gray-400 flex justify-start w-[400px]'>{textYOU}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default Text