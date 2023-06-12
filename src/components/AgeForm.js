import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const DataUserDudasComentariosSchema = Yup.object().shape({
	day: Yup.string()
		.matches(/^[0-9]+$/, 'Solo se permiten números')
		.max(2, 'La fecha debe tener maximo 2 digitos')
		.required('Por favor ingresa un dia'),
    month: Yup.string()
        .matches(/^[0-9]+$/, 'Solo se permiten números')
        .max(2, 'La fecha debe tener maximo 2 digitos')
        .required('Por favor ingresa un mes'),
    year: Yup.string()
		.matches(/^[0-9]+$/, 'Solo se permiten números')
		.min(4, 'La fecha debe tener 4 digitos')
		.max(4, 'La fecha debe tener 4 digitos')
		.required('Por favor ingresa un año')
});

export default function AgeForm() {

	const [dayValue, setDayValue] = useState();
	const [monthValue, setMonthValue] = useState();
	const [yearValue, setYearValue] = useState();

	function ageCalculate(formDate) {
		let formDateValue = formDate;
		let currentDate = new Date();
		let oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
		let dateDifferences = Math.floor((currentDate - formDateValue) / oneDay);
		let years = Math.floor(dateDifferences / 365); // Approximately 365 days in a year
		let remainingMonths = dateDifferences % 365; // Calculate the remaining months after calculating the years
		let months = Math.floor(remainingMonths / 30); // About 30 days in a month
		let days = remainingMonths % 30; // Calculate the remaining days after calculating the months

		setDayValue(days);
		setMonthValue(months);
		setYearValue(years);
	}

	return (
		<div className='form'>
			<Formik
				initialValues={{ day: '', month: '', year: ''}}
				validationSchema={DataUserDudasComentariosSchema}
				onSubmit={values => {
					let day = values.day;
					let month = values.month;
					let year = values.year;
					let userDate = new Date(year, month-1, day);
					ageCalculate(userDate);
				}}
			>
				{({ errors, touched }) => (		
					<Form>
						<div className='is-flex mb-5'>
							<div className='field'>
								<label className='label'>DAY</label>
								<div className='control'>
									<Field className="input" name="day" placeholder="DD" />
								</div>
								{errors.day && touched.day ? ( <p className="help is-danger">{errors.day}</p> ) : null}
							</div>
							<div className='field'>
								<label className='label'>MONTH</label>
								<div className='control'>
									<Field className="input" name="month" placeholder="MM" />
								</div>
								{errors.month && touched.month ? ( <p className="help is-danger">{errors.month}</p> ) : null}
							</div>
							<div className='field'>
								<label className='label'>YEAR</label>
								<div className='control'>
									<Field className="input" name="year" placeholder="YYYY" />
								</div>
								{errors.year && touched.year ? ( <p className="help is-danger">{errors.year}</p> ) : null}
							</div>
						</div>
						<div className='field submit-field m-0'>
							<div className='control is-flex'>
								<button type="submit">
									<img src='./icon-arrow.svg' />
								</button>
							</div>
						</div>
					</Form>
				)}
			</Formik>
			<div className='form-results'>
				<h2><span>{yearValue ? yearValue : '--'}</span> years</h2>
				<h2><span>{monthValue ? monthValue : '--'}</span> months</h2>
				<h2><span>{dayValue ? dayValue : '--'}</span> days</h2>
			</div>
		</div>
	)
}