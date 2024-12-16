import { Schema, model, models } from "mongoose";

const MessageSchema = new Schema(
    {
        sender: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Sender is required"],
        },
        receiver: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Receiver is required"],
        },
        part: {
            type: Schema.Types.ObjectId,
            ref: "Part",
            required: [true, "Part is required"],
        },
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
        },
        phone: {
            type: String,
        },
        message: {
            type: String,
            required: [true, "Message is required"],
        },
        status: {
            type: String,
            default: false,
        },
    },
    { timestamps: true },
);

const Message = models.Message || model("Message", MessageSchema);

export default Message;