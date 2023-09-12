import Swal from "sweetalert2";

export const popUpAlert = ({
  title,
  icon,
  successTitle,
  successNotification,
  successIcon,
}) => {
  Swal.fire({
    title: title || "Are you sure?",
    text: "You won't be able to revert this!",
    icon: icon || "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        successTitle || "Deleted!",
        successNotification || "Your file has been deleted.",
        successIcon || "success"
      );
    }
  });
};
