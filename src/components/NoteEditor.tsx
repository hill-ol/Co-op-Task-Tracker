// src/components/NoteEditor.tsx
import React from 'react';
import { StickyNote, X } from 'lucide-react';

interface NoteEditorProps {
    noteText: string;
    onNoteChange: (text: string) => void;
    onSave: () => void;
    onCancel: () => void;
}

const NoteEditor: React.FC<NoteEditorProps> = ({
                                                   noteText,
                                                   onNoteChange,
                                                   onSave,
                                                   onCancel
                                               }) => {
    return (
        <div className="modal-overlay" onClick={onCancel}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title">
                        <StickyNote className="modal-icon" />
                        Add Note
                    </h3>
                    <button onClick={onCancel} className="modal-close">
                        <X className="close-icon" />
                    </button>
                </div>
                <textarea
                    className="note-textarea"
                    value={noteText}
                    onChange={(e) => onNoteChange(e.target.value)}
                    placeholder="Add notes, links, reminders, or any details about this task..."
                    autoFocus
                />
                <div className="modal-actions">
                    <button onClick={onCancel} className="button-secondary">
                        Cancel
                    </button>
                    <button onClick={onSave} className="button-primary">
                        Save Note
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoteEditor;