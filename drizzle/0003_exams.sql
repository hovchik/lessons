CREATE TABLE `exams` (
	`id` text PRIMARY KEY NOT NULL,
	`kind` text NOT NULL,
	`system` text NOT NULL,
	`subject_id` text,
	`grade` integer NOT NULL,
	`position` integer DEFAULT 0 NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`format` text NOT NULL,
	`questions` text DEFAULT '[]' NOT NULL,
	`duration_min` integer DEFAULT 45 NOT NULL,
	`scale` text DEFAULT 'mixed' NOT NULL,
	`pass_percent` integer DEFAULT 40 NOT NULL,
	`status` text DEFAULT 'published' NOT NULL,
	`source` text DEFAULT 'seed' NOT NULL,
	`updated_at` text DEFAULT (current_timestamp) NOT NULL,
	FOREIGN KEY (`subject_id`) REFERENCES `subjects`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `exams_subject_grade` ON `exams` (`subject_id`,`grade`);--> statement-breakpoint
CREATE INDEX `exams_kind_system` ON `exams` (`kind`,`system`);