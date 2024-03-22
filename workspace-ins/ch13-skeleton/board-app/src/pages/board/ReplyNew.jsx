import useCustomAxios from "@hooks/useCustomAxios.mjs";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

ReplyNew.propTypes = {
  fetchList: PropTypes.func.isRequired,
}

function ReplyNew({ fetchList }){
  const { _id } = useParams();
  const axios = useCustomAxios();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async formData => {
    await axios.post(`/posts/${ _id }/replies`, formData);
    fetchList();
    reset();
  };

  return (
    <div>
      <h4>새로운 댓글을 추가하세요.</h4>
      <form onSubmit={ handleSubmit(onSubmit) } >
        <div>
          <div>
            <textarea { ...register('comment', { minLength: 2 }) } rows="3" cols="40" placeholder="내용을 입력하세요."></textarea>
          </div>
        </div>
        <button type="submit">댓글 등록</button>
      </form>
    </div>
  );
}

export default ReplyNew;