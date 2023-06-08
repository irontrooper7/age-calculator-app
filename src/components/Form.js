export default function Form() {
    return (
        <div className='form'>
            <form>
                <div className='is-flex'>
                    <div className='field'>
                        <label class='label'>DAY</label>
                        <div class='control'>
                            <input class='input' type='text' placeholder='DD' />
                        </div>
                        <p class="help is-danger">This field is required</p>
                    </div>
                    <div className='field'>
                        <label class='label'>MONTH</label>
                        <div class='control'>
                            <input class='input' type='text' placeholder='MM' />
                        </div>
                        <p class="help is-danger">This field is required</p>
                    </div>
                    <div className='field'>
                        <label class='label'>YEAR</label>
                        <div class='control'>
                            <input class='input' type='text' placeholder='YYYY' />
                        </div>
                        <p class="help is-danger">This field is required</p>
                    </div>
                </div>
                <div class='field submit-field m-0'>
                    <div class='control is-flex'>
                        <button>
                            <img src='./icon-arrow.svg' />
                        </button>
                    </div>
                </div>
            </form>
            <div className='form-results'>
                <h2><span>--</span> years</h2>
                <h2><span>--</span> months</h2>
                <h2><span>--</span> days</h2>
            </div>
        </div>
    )
}