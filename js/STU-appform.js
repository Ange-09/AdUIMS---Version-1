// Automatic Date
function updateDate() {
    let now = new Date(); // Get current date
    let date = now.toLocaleDateString(); // Format date (default)
                
    document.getElementById("date").innerHTML = date;
}

// Shows the input field for "Other Document" if selected
function checkOption() {
    let docType = document.getElementById("documenttype").value;
    let otherInputDiv = document.getElementById("otherDocumentDiv");

    if (docType === "Other Document") {
        otherInputDiv.style.display = "block"; // Show input field
    } else {
        otherInputDiv.style.display = "none";  // Hide input field
    }
}

function goToNextPage() {
    let docType = document.getElementById("documenttype").value;
    let otherDocInput = document.getElementById("otherDocument").value;

    if (docType === "") {
        alert("Please select a document type.");
        return;
    }

    if (docType === "Other Document") {
        if (!otherDocInput.trim()) {
            alert("Please specify the document type.");
            return;
        }
        docType = otherDocInput; // Use the custom document type
    }

    // Redirect to next page with selected document type
    window.location.href = "document-page.html?type=" + encodeURIComponent(docType);
}

// File Drag and Drop