import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AmbientAudio() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioCtxRef = useRef<AudioContext | null>(null);
    const gainNodeRef = useRef<GainNode | null>(null);

    const initAudio = () => {
        if (!audioCtxRef.current) {
            const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
            const ctx = new AudioContext();
            audioCtxRef.current = ctx;

            // Master Gain for fading in/out
            const masterGain = ctx.createGain();
            masterGain.gain.value = 0;
            masterGain.connect(ctx.destination);
            gainNodeRef.current = masterGain;

            // 1. Dark Matter Drone (Low fundamental sine wave)
            const osc1 = ctx.createOscillator();
            osc1.type = 'sine';
            osc1.frequency.value = 32.7; // C1 - very deep sub-bass

            // 2. Ethereal Overtone (Triangle wave for texture)
            const osc2 = ctx.createOscillator();
            osc2.type = 'triangle';
            osc2.frequency.value = 65.41; // C2

            // 3. Cybernetic presence (Square/PWM style, heavily filtered)
            const osc3 = ctx.createOscillator();
            osc3.type = 'sine';
            osc3.frequency.value = 98.0; // G2

            // Filter to dampen highs and make it "underwater/void" like
            const filter = ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = 150;
            filter.Q.value = 2;

            // Slow LFO to sweep the filter frequency for a "breathing" effect
            const lfo = ctx.createOscillator();
            lfo.type = 'sine';
            lfo.frequency.value = 0.05; // 20 second cycle

            const lfoGain = ctx.createGain();
            lfoGain.gain.value = 100; // Sweep +- 100hz

            lfo.connect(lfoGain);
            lfoGain.connect(filter.frequency);

            // Volume balancing
            const gain1 = ctx.createGain(); gain1.gain.value = 0.8;
            const gain2 = ctx.createGain(); gain2.gain.value = 0.1;
            const gain3 = ctx.createGain(); gain3.gain.value = 0.1;

            osc1.connect(gain1); gain1.connect(masterGain);
            osc2.connect(gain2); gain2.connect(filter);
            osc3.connect(gain3); gain3.connect(filter);

            filter.connect(masterGain);

            osc1.start();
            osc2.start();
            osc3.start();
            lfo.start();
        }

        if (audioCtxRef.current.state === 'suspended') {
            audioCtxRef.current.resume();
        }
    };

    useEffect(() => {
        if (isPlaying) {
            initAudio();
            // Slow 4-second fade in
            gainNodeRef.current?.gain.setTargetAtTime(0.5, audioCtxRef.current!.currentTime, 4);
        } else {
            if (gainNodeRef.current && audioCtxRef.current) {
                // Slow 2-second fade out
                gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 2);
            }
        }
    }, [isPlaying]);

    return (
        <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100] w-12 h-12 flex items-center justify-center rounded-full glass-card hover:border-white/30 text-white/50 hover:text-white transition-all duration-500 shadow-void"
            aria-label="Toggle ambient void frequency"
        >
            {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>
    );
}
