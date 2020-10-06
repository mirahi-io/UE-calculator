import { Formik } from "formik";
import React, { useState } from "react";

const AddCourseForm = (props) => {
  const { addCourse, courses } = props;
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm ? (
        <Formik
          initialValues={{ name: "", percent: "", points: "" }}
          validate={validate(courses)}
          onSubmit={(
            { name, percent, points },
            { setSubmitting, resetForm }
          ) => {
            addCourse({
              name,
              percent: parseInt(percent),
              points: parseInt(points),
            });
            setSubmitting(false);
            resetForm({});
            setShowForm(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nom du cours"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <p>{errors.name && touched.name && errors.name}</p>
              </div>
              <div>
                <input
                  type="number"
                  name="percent"
                  placeholder="Pourcentage"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.percent}
                />
                <p>{errors.percent && touched.percent && errors.percent}</p>
              </div>
              <div>
                <input
                  type="number"
                  name="points"
                  placeholder="Points (/20)"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.points}
                />
                <p>{errors.points && touched.points && errors.points}</p>
              </div>
              <div className="horizontal">
                <button type="submit" disabled={isSubmitting}>
                  Ajouter
                </button>
                <button
                  disabled={isSubmitting}
                  onClick={() => setShowForm(false)}
                >
                  Annuler
                </button>
              </div>
            </form>
          )}
        </Formik>
      ) : (
        <button onClick={() => setShowForm((value) => !value)}>+</button>
      )}
    </>
  );
};

export default AddCourseForm;

const validate = (courses) => (values) => {
  let errors = {};

  if (!values.name) {
    errors.email = "Obligatoire";
  }

  if (values.percent === "") {
    errors.percent = "Obligatoire";
  } else if (!/^\d+$/.test(values.percent)) {
    errors.percent = "Doit être un chiffre";
  } else if (values.percent <= 0) {
    errors.percent = "Ne peut pas être zero";
  } else if (
    parseInt(values.percent) +
      courses.reduce((total, course) => total + course.percent, 0) >
    99
  ) {
    errors.percent =
      "Le total des pourcentage de tous les cours dois être inférieur à 99%";
  }

  if (values.points === "") {
    errors.points = "Obligatoire";
  } else if (isNaN(parseFloat(values.points))) {
    errors.points = "Doit être un chiffre";
  } else if (parseInt(values.points) > 20) {
    errors.points = "Doit être compris entre 0 et 20";
  }

  return errors;
};
