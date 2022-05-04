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
                                    "제목을 넣어주세요"
                                ) : (
                                    <>
                                        제목&nbsp;<span className="label__required">*</span>
                                    </>
                                )}
                            </label>
                            <input
                                type="text"
                                id="titleInput"
                                name="title"
                                placeholder="제목"
                                className={cx("input", errors.name && "input--error")}
                                ref={register({required: true})}
                            />
                        </div>

                        <div className="form__element">
                            <label
                                htmlFor="placeInput"
                                className={cx("label", errors.email && "label--error")}
                            >장소
                            </label>
                            <select
                                id="placeInput"
                                name="place"
                                className={cx("input")}
                                ref={register({})}
                            >
                                <option>예술의전당</option>
                                <option>예술의전당 CJ 토월극장</option>
                                <option>예술의전당 IBK챔버홀</option>
                                <option>예술의전당 리사이틀홀</option>
                                <option>예술의전당 서울서예박물관</option>
                                <option>예술의전당 신세계스퀘어 야외무대</option>
                                <option>예술의전당 오페라극장</option>
                                <option>예술의전당 자유소극장</option>
                                <option>예술의전당 콘서트홀</option>
                                <option>예술의전당 한가람디자인미술관</option>
                                <option>예술의전당 한가람미술관</option>
                            </select>
                        </div>
                        <div className="form__element">
                            <label
                                htmlFor="addressArea"
                                className={cx("label", errors.address && "label--error")}
                            >형식
                            </label>
                                <select
                                id="typeInput"
                                name="type"
                                placeholder="형식"
                                className={cx("input")}
                                ref={register()}>
                                    <option>대관</option>
                                    <option>기획</option>
                                </select>
                        </div>

                        <div className="form__element">
                            <label
                                htmlFor="startDateInput"
                                className={cx("label")}
                            >
                                시작일
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
                                시작일
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
                                관람객 수
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