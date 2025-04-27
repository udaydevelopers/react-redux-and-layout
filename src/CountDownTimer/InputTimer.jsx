const InputTimer = ({handleInput, handleStart}) => {
    return (<div className='container'>
    <div className="row p-3">
        <div className="col-sm-12 p-1">
        <input type="text" id='hours' className='input-text' placeholder='HH' onChange={handleInput}/>
        <input type="text" id='minutes' className='input-text' placeholder='MM' onChange={handleInput}/>
        <input type="text" id='seconds' className='input-text' placeholder='SS' onChange={handleInput}/>
        <button className='btn btn-success m-3' onClick={handleStart}>Start</button>
        </div>
    </div>
</div>);
}
export default InputTimer;