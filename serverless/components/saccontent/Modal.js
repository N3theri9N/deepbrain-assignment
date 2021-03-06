import {useEffect} from "react";
import ReactDOM from "react-dom";

import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import cx from "clsx";

import {CheckSVG, CloseSVG} from "@/icons";

import {
    addSacContent,
    setModalOpen,
    setSelectedSacContent,
    updateSacContent,
} from "@/modules";

export function Modal() {
    const {register, handleSubmit, errors, reset, setValue} = useForm();

    const state = useSelector((state) => state.saccontent);

    const dispatch = useDispatch();

    const closeModal = () => {
        reset();
        dispatch(setModalOpen(false));
        dispatch(setSelectedSacContent(undefined));
    };

    const onSubmitHandler = (data) => {
        if (data) {
            closeModal();
        }
        if (state.selectedSacContent) {
            dispatch(
                updateSacContent({
                    _id: state.selectedSacContent._id,
                    ...data,
                })
            );
        } else {
            dispatch(addSacContent(data));
        }
    };

    useEffect(() => {
        if (state.selectedSacContent) {
            setValue("title", state.selectedSacContent.title);
            setValue("place", state.selectedSacContent.place);
            setValue("type", state.selectedSacContent.type);
            setValue("startDate", state.selectedSacContent.startDate);
            setValue("endDate", state.selectedSacContent.endDate);
            setValue("audience", state.selectedSacContent.audience);
        }
    }, [state.selectedSacContent, setValue]);

    return state.isModalOpen
        ? ReactDOM.createPortal(
            <div className="modal">
                <div className="modal__content">
                    <header className="header modal__header">
                        <h1 className="header__h2">
                            {state.selectedSacContent ? (
                                <>
                                    Edit <span>SAC Content</span>
                                </>
                            ) : (
                                <>
                                    Add <span>SAC Content</span>
                                </>
                            )}
                        </h1>
                        <button
                            className="btn btn__compact btn__close"
                            onClick={closeModal}
                        >
                            <CloseSVG/>
                        </button>
                    </header>

                    <form
                        className="form modal__form"
                        onSubmit={handleSubmit(onSubmitHandler)}
                        noValidate
                    >
                        <div className="form__element">
                            <label
                                htmlFor="titleInput"
                                className={cx("label", errors.title && "label--error")}
                            >
                                {errors.title ? (
                                    "????????? ???????????????"
                                ) : (
                                    <>
                                        ??????&nbsp;<span className="label__required">*</span>
                                    </>
                                )}
                            </label>
                            <input
                                type="text"
                                id="titleInput"
                                name="title"
                                placeholder="??????"
                                className={cx("input", errors.name && "input--error")}
                                ref={register({required: true})}
                            />
                        </div>

                        <div className="form__element">
                            <label
                                htmlFor="placeInput"
                                className={cx("label", errors.email && "label--error")}
                            >??????
                            </label>
                            <select
                                id="placeInput"
                                name="place"
                                className={cx("input")}
                                ref={register({})}
                            >
                                <option>???????????????</option>
                                <option>??????????????? CJ ????????????</option>
                                <option>??????????????? IBK?????????</option>
                                <option>??????????????? ???????????????</option>
                                <option>??????????????? ?????????????????????</option>
                                <option>??????????????? ?????????????????? ????????????</option>
                                <option>??????????????? ???????????????</option>
                                <option>??????????????? ???????????????</option>
                                <option>??????????????? ????????????</option>
                                <option>??????????????? ???????????????????????????</option>
                                <option>??????????????? ??????????????????</option>
                            </select>
                        </div>
                        <div className="form__element">
                            <label
                                htmlFor="addressArea"
                                className={cx("label", errors.address && "label--error")}
                            >??????
                            </label>
                                <select
                                id="typeInput"
                                name="type"
                                placeholder="??????"
                                className={cx("input")}
                                ref={register()}>
                                    <option>??????</option>
                                    <option>??????</option>
                                </select>
                        </div>

                        <div className="form__element">
                            <label
                                htmlFor="startDateInput"
                                className={cx("label")}
                            >
                                ?????????
                            </label>
                            <input
                                type="date"
                                id="startDateInput"
                                name="startDate"
                                className={cx("input")}
                                ref={register()}
                            />
                        </div>
                        <div className="form__element">
                            <label
                                htmlFor="endDateInput"
                                className={cx("label")}
                            >
                                ?????????
                            </label>
                            <input
                                type="date"
                                id="endDateInput"
                                name="endDate"
                                className={cx("input")}
                                ref={register()}
                            />
                        </div>


                        <div className="form__element">
                            <label
                                htmlFor="audienceNumber"
                                className={cx("label")}
                            >
                                ????????? ???
                            </label>
                            <input
                                type="number"
                                id="audienceNumber"
                                name="audience"
                                placeholder=""
                                className={cx("input")}
                                ref={register({})}
                            />
                        </div>

                        <div className="form__action">
                            <button
                                className="btn btn__icon btn__cancel"
                                type="button"
                                onClick={closeModal}
                            >
                                <CloseSVG/> Cancel
                            </button>
                            <button className="btn btn__primary btn__icon" type="submit">
                                <CheckSVG/> {state.selectedSacContent ? "Update" : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>,
            document.body
        )
        : null;
}