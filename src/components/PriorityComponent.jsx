export function PriorityComponent(setPriority, priority) {
    return <div>
        <p className="margin-top-1 w-100 text-align-center">Priority</p>
        <div className="d-flex margin-top-1">
            <label className="d-flex  align-items-center margin-none">
                <input type="radio" name="sort" class="input-radio hidden" onChange={(e) => e.target.checked ? setPriority('High') : ''} />
                <span class="material-icons high" style={{ color: priority === 'High' ? `var(--danger)` : "" }}>
                    emoji_emotions
                </span></label>
            <label className="d-flex  align-items-center margin-none">
                <input type="radio" name="sort" class="input-radio hidden" onChange={(e) => e.target.checked ? setPriority('Medium') : ''} />
                <span class="material-icons medium " style={{ color: priority === 'Medium' ? `var(--warning)` : "" }}>
                    emoji_emotions
                </span></label>
            <label className="d-flex  align-items-center margin-none">
                <input type="radio" name="sort" class="input-radio hidden" onChange={(e) => e.target.checked ? setPriority('Low') : ''} />
                <span class="material-icons  low" style={{ color: priority === 'Low' ? `var(--success)` : "" }}>
                    emoji_emotions
                </span></label></div>
    </div>;
}