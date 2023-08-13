import { Typing } from 'react-typing-effects'

export default function CustomTypewriter() {
    return (
        <div>
            <Typing
                interval={100}
                existTime={2000}
                textStyle={{
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    fontFamily: 'Poppins',
                    letterSpacing: '4px',
                    fontSize: '4rem'
                }}
                symbolStyle={{
                    borderColor: "red",
                }}
            >
                Bhushan Khope
            </Typing>
        </div>
    )
}