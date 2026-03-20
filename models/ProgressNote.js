const mongoose = require('mongoose');

const progressNoteSchema = new mongoose.Schema(
    {
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student',
            required: true,
        },
        programCase: {
            type: String,
        },
        dateOfSession: {
            type: Date,
            required: true,
        },
        sessionType: {
            type: String,
            required: true,
            enum: ['Counseling', 'Progress Update', 'Case Meeting', 'Behavior Observation', 'Clinical Session', 'Other'],
            default: 'Progress Update'
        },
        noteTitle: {
            type: String,
            required: true,
        },
        notes: {
            type: String,
            required: false, // Changed to false as PIE fields might be used instead
        },
        // Unified Clinical / PCP Fields
        serviceDescription: {
            type: String,
        },
        faceToFace: {
            type: String,
            default: 'Face-to-Face'
        },
        faceToFaceIndicator: {
            type: String,
        },
        purpose: {
            type: String,
        },
        intervention: {
            type: String,
        },
        effectiveness: {
            type: String,
        },
        staffNotes: {
            type: String,
        },
        staffSignature: {
            type: String,
        },
        followUpRequired: {
            type: Boolean,
            default: false,
        },
        followUpDate: {
            type: Date,
        },
        attachment: {
            type: String, // ImageKit URL
        },
        staffMember: {
            type: String,
            required: true,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        organizationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Organization',
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('ProgressNote', progressNoteSchema);
