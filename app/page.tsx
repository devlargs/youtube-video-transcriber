import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center gap-12 px-4 py-16 sm:px-8">
        <div className="flex w-full justify-end">
          <ThemeToggle />
        </div>
        <header className="space-y-4 text-center text-[color:var(--foreground)] sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest copy-muted">
            Youtube Video Transcriber
          </p>
          <h1 className="text-4xl font-semibold leading-[1.1]">
            Drop a link or upload your video to get an instant transcript.
          </h1>
          <p className="text-base copy-muted">
            Paste a YouTube URL or upload an audio/video file. We handle the rest.
          </p>
        </header>

        <form
          className="space-y-8 rounded-3xl border p-8 shadow-sm surface-card"
          noValidate
        >
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="youtube-url">
              YouTube URL
            </label>
            <textarea
              id="youtube-url"
              name="youtube-url"
              rows={5}
              placeholder="https://youtube.com/watch?v=..."
              className="input-field w-full resize-none rounded-2xl border px-4 py-3 text-base shadow-inner transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--border)]"
            />
          </div>

          <div className="flex items-center gap-3 text-[color:var(--muted-contrast)]">
            <div className="divider-line h-px flex-1" />
            <span className="text-xs font-semibold tracking-[0.2em]">OR</span>
            <div className="divider-line h-px flex-1" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="media-upload">
              Upload audio or video
            </label>
            <input
              id="media-upload"
              name="media-upload"
              type="file"
              accept="audio/*,video/*"
              className="input-field block w-full cursor-pointer rounded-2xl border border-dashed px-4 py-4 text-sm transition hover:border-[var(--foreground)] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--border)]"
            />
            <p className="text-xs copy-muted">
              Max size 500MB. Formats: MP3, MP4, WAV, MOV.
            </p>
          </div>

          <button
            type="submit"
            className="primary-button w-full rounded-2xl py-3 text-sm font-semibold uppercase tracking-wide transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--border)]"
          >
            Generate Transcript
          </button>
        </form>
      </main>
    </div>
  );
}
