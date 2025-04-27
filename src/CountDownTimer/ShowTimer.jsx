const ShowTimer = (props) => {
    const {hours, minutes, seconds, isPaused, handlePause, handleResue, handleReset} = props;
    
    return (<div className='container'>
    <div className="row p-3">
    <div className="col-sm-12 p-1">
        <span className='timer-text'>{hours < 10 ? `0${hours}` : hours}:</span>
        <span className='timer-text'>{minutes < 10 ? `0${minutes}` : minutes}:</span>
        <span className='timer-text'>{seconds < 10 ? `0${seconds}`: seconds}</span>
    </div>
    <div className="row">
        <div className="col-sm-12">
            { !isPaused && <button className='btn btn-success px-3' onClick={handlePause}>Pause</button>}
            { isPaused && <button className='btn btn-success px-3' onClick={handleResue}>Resume</button>}
        <button className='btn btn-danger' onClick={handleReset}>Reset</button>
        </div>
    </div>
    </div>
</div>);
}

export default ShowTimer;