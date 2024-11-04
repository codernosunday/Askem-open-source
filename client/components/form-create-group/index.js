import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { FetchContext } from '../../store/fetch'
import Button from '../button'
import FormInput from '../form-input'
import styles from './formcreategroup.module.css'
const FormCreateGroup = () => {
    const router = useRouter()
    const { authAxios } = useContext(FetchContext)
    const [loading, setLoading] = useState(false)
    return (
        <Formik
            initialValues={{ name: '' }}
            onSubmit={async (values, { setStatus, resetForm }) => {
                setLoading(true)
                try {
                    await authAxios.post('group', values)
                    resetForm({})
                    router.push('/groups')
                } catch (error) {
                    setStatus(error.response.data.message)
                }
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required("Name your group")
                    .max(100, 'name cannot be longer than 100 characters.')
                    .min(5, 'Name must be at least 5 characters.'),
            })}
        >
            {({
                values,
                errors,
                touched,
                status,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
            }) => (
                <div className={styles.maincontainer}>
                    <div className={styles.container}>
                        <form onSubmit={handleSubmit}>
                            <FormInput
                                label="Name group"
                                inputInfo="Your group name will make other user easilly recognize"
                                type="text"
                                name="name"
                                autoComplete="off"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                hasError={touched.name && errors.name}
                                errorMessage={errors.name && errors.name}
                                placeholder="Name your own group"
                            />
                            <div>
                                <p className={styles.status}>{status}</p>
                                <Button
                                    type="submit"
                                    primary
                                    isLoading={loading}
                                    disabled={isSubmitting}
                                >
                                    Create group
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </Formik>

    )
}

export default FormCreateGroup