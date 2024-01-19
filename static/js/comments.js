const editButtons  = document.getElementsByClassName("btn-edit");
const commentText = document.getElementById("id_body")
const commentForm = document.getElementById("commentForm")
const submitButton = document.getElementById("submitButton")
const deleteModal= new bootstrap.Modal(document.getElementById("deleteModal"));
const deleteButtons = document.getElementsByClassName("btn-delete");
const deleteConfirm = document.getElementById("deleteConfirm");

/** initializes edit functionality for the provided edit buttons.
 * for each button in the 'editButtons' collection:
 * -retrieves the associated comment's ID upon click.
 * - fetches the content of the corresponding comment.
 * - Populates the 'commentText' input/textarea with the comment's conten for editing.
 * Updates the suabmit button's text to "Update".
 * - sets teh form's action atteivute to the 'edit_comment/ {commentId} endpoint.
 * 
 */ 

for (let button of editButtons) {
    button.addEventListener("click", (e) => {
        let commentId = e.target.getAttribute("comment_id");
        let commentContent = document.getElementById(`comment${commentId}`).innerText;
        commentText.value = commentContent;
        submitButton.innerText = "Update";
        commentForm.setAttribute("action", `edit_comment/${commentId}`);
    });
}

/** 
 * Initializes deletion functionality for the provided delete buttons.
 * 
 * for each button in the 'deletebuttons' collection
 * retrieves the associated comment's Id upon click.
 * updates the 'deleteConfirm' link's href to point to the 
 * deletion endpoint for the specific comment.
 * displays a confirmation modal 'delete modal' to prompt the user for confirmation before the deletion
 * 
 */
for (let button of deleteButtons) {
    button.addEventListener("click", (e) => {
        let commentId = e.target.getAttribute("comment_id");
        deleteConfirm.href = `delete_comment/${commentId}`;
        deleteModal.show();
    })
}