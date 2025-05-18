import AnimatedCursor from 'react-animated-cursor'

const Cursor = () => {
    return (
        <div className='Cursor'>
            <AnimatedCursor
                innerSize={8}
                outerSize={50}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                hasBlendMode={true}
                innerStyle={{
                    backgroundColor: "#ff9900",
                }}
                outerStyle={{
                    border: "3px solid #000",
                }}
            />
        </div>
    )
}

export default Cursor